import { type Handlers } from "$fresh/server.ts";

let latest: string | undefined;

export const handler: Handlers = {
  async GET(req) {
    if (req.headers.get("user-agent")?.startsWith("Deno")) {
      if (!latest) {
        const res = await fetch("https://jsr.io/@kitsonk/kview/meta.json");
        if (res.ok) {
          const { latest: l } = await res.json();
          latest = l;
        } else {
          return Response.error();
        }
      }
      return Response.redirect(
        `https://jsr.io/@kitsonk/kview/${latest}/install.ts`,
        307,
      );
    }
    return Response.redirect("/", 301);
  },
};
