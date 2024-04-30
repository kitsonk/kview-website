import { type ComponentChild } from "preact";

import { type IndexNode } from "../utils/docs.ts";

function DocSubItems({ nodes }: { nodes?: IndexNode[] }) {
  if (!nodes || !nodes.length) {
    return null;
  }
  const items: ComponentChild[] = [];
  for (const { order, href, title } of nodes) {
    if (order !== 0) {
      items.push(
        <li class="mt-1">
          <a href={`/docs${href}`}>{title}</a>
        </li>,
      );
    }
  }
  return (
    <ul class="ml-4">
      {items}
    </ul>
  );
}

export default function DocIndex({ index }: { index: IndexNode[] }) {
  const items = index.map(({ title, href, children }) => (
    <li class="mt-2">
      <a class="font-bold" href={`/docs${href}`}>{title}</a>
      <DocSubItems nodes={children} />
    </li>
  ));
  return (
    <aside class="border-r mt-14 border-gray-500 w-[300px] break-words">
      <div class="top-0 h-full max-h-screen fixed">
        <div class="w-[300px] h-full pt-14 flex">
          <nav
            aria-label="docs sidebar"
            class="pt-2 pb-4 pl-4 overflow-y-auto scrollbar-thin flex-1"
          >
            <ul>{items}</ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
