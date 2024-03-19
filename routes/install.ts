import { type Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    if (req.headers.get("user-agent")?.startsWith("Deno")) {
      return ctx.redirect("https://deno.land/x/kview/install.ts", 307);
    }
    return ctx.redirect("/", 301);
  },
};
