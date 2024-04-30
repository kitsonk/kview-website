import { equal } from "@std/assert/equal";
import { walk } from "@std/fs/walk";
import { SEPARATOR } from "@std/path/constants";
import { render, stripSplitBySections } from "@deno/gfm";

const DOCS_PATH = "../docs";
const KEY_DOCS = ["docs"];

export interface DocPage {
  headers: { header: string; depth: number }[];
  html: string;
}

export interface IndexNode {
  title: string;
  href: string;
  page: string[];
  order: number;
  children?: IndexNode[];
}

const ORDER_RE = /^([0-9]{2})_([a-zA-Z_]+)/;

function logCommitError(error: Deno.KvCommitError) {
  console.error(
    `%cError%c loading documentation.\n\n%c${
      JSON.stringify(error, undefined, "  ")
    }`,
    "color:red",
    "color:none",
    "color:gray",
  );
}

function getOrder(page: string[]) {
  const match = page[page.length - 1].match(ORDER_RE);
  if (match) {
    return parseInt(match[1], 10);
  } else {
    return 99;
  }
}

function sortChildren(children: IndexNode[]) {
  children.sort(
    ({ page: pageA, order: orderA }, { page: pageB, order: orderB }) => {
      if (orderA !== orderB) {
        return orderA - orderB;
      } else {
        return pageA[pageA.length - 1] < pageB[pageB.length - 1] ? 1 : -1;
      }
    },
  );
  for (const child of children) {
    if (child.children && child.children.length) {
      sortChildren(child.children);
    }
  }
}

function keyToPath(key: string[]): string {
  const parts: string[] = [];
  key.forEach((part, i) => {
    const match = part.match(ORDER_RE);
    if (match) {
      const [, ordStr, segment] = match;
      const ord = parseInt(ordStr, 10);
      if (ord || i < key.length - 1) {
        parts.push(segment);
      }
    } else {
      parts.push(part);
    }
  });
  return `/${parts.join("/")}`;
}

function appendChild(node: IndexNode, children: IndexNode[], depth: number) {
  if (node.page.length === depth) {
    children.push(node);
  } else {
    const parentName = node.page.slice(0, depth);
    let parent = children.find(({ page }) => equal(parentName, page));
    if (!parent) {
      parent = {
        title: "",
        href: keyToPath(parentName),
        page: parentName,
        order: getOrder(parentName),
        children: [],
      };
      children.push(parent);
    }
    if (node.page.length === depth + 1 && node.order === 0 && !parent.title) {
      parent.title = node.title;
    }
    if (!parent.children) {
      parent.children = [];
    }
    appendChild(node, parent.children, depth + 1);
  }
}

/** Load the documentation into the datastore. */
export async function load(db?: string) {
  console.log(
    `%cLoading%c docs into %c${db ? "production" : "local"}%c db...`,
    "color:green",
    "color:none",
    "color:yellow",
    "color:none",
  );
  const url = new URL(DOCS_PATH, import.meta.url);
  const pathnameLength = url.pathname.length;
  const path = db && `https://api.deno.com/databases/${db}/connect`;
  const kv = await Deno.openKv(path);
  const op = kv.atomic();
  for await (const { key } of kv.list({ prefix: KEY_DOCS })) {
    op.delete(key);
  }
  const res = await op.commit();
  if (!res.ok) {
    logCommitError(res);
    return;
  }
  const nodes: IndexNode[] = [];
  for await (const entry of walk(new URL(DOCS_PATH, import.meta.url))) {
    const pathParts = entry.path.slice(pathnameLength + 1).split(SEPARATOR);
    if (entry.isFile) {
      const href = keyToPath(pathParts);
      const key = [...KEY_DOCS, href];
      const page = [...pathParts];
      const orderMatch = pathParts.pop()?.match(ORDER_RE);
      let order = 99;
      if (orderMatch) {
        order = parseInt(orderMatch[1], 10);
      }
      const file = await Deno.readTextFile(entry.path);
      const headers = stripSplitBySections(file)
        .map(({ header, depth }) => ({ header, depth }));
      const html = render(file, { disableHtmlSanitization: true });
      const value: DocPage = { headers, html };
      const res = await kv.set(key, value);
      if (!res.ok) {
        console.error(
          `%cError%c loading documentation.\n\n%c${
            JSON.stringify(res, undefined, "  ")
          }`,
          "color:red",
          "color:none",
          "color:gray",
        );
        continue;
      }
      const title = headers
        .find(({ depth }) => depth === 1)?.header ?? page[page.length - 1];
      nodes.push({ title, href, page, order });
    }
  }
  const index: IndexNode[] = [];
  for (const node of nodes) {
    appendChild(node, index, 1);
  }
  sortChildren(index);
  Deno.writeTextFile(
    new URL("../index.json", import.meta.url),
    JSON.stringify(index),
  );
  if (!res.ok) {
    logCommitError(res);
    return;
  }
  kv.close();
}
