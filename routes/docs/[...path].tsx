import { type RouteContext } from "$fresh/server.ts";

import index from "../../index.json" with { type: "json" };
import DocIndex from "../../components/DocIndex.tsx";
import Header from "../../components/Header.tsx";
import Toc from "../../components/Toc.tsx";
import { type DocPage } from "../../utils/docs.ts";

export default async function Docs(
  _req: Request,
  { params: { path }, renderNotFound }: RouteContext,
) {
  const kv = await Deno.openKv();
  const { value } = await kv.get<DocPage>(["docs", `/${path}`]);
  if (!value) {
    return renderNotFound();
  }
  const { html: __html, headers } = value;
  return (
    <>
      <Header />
      <div class="flex mx-auto max-w-screen-xl overscroll-none min-h-full">
        <DocIndex index={index} />
        <main class="p-8 mt-14 container min-h-screen">
          <div class="flex w-full pb-16">
            <div
              class="flex-grow markdown px-8"
              dangerouslySetInnerHTML={{ __html }}
            >
            </div>
            <Toc headers={headers} />
          </div>
        </main>
      </div>
    </>
  );
}
