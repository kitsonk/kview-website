import { type Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    if (req.headers.get("user-agent")?.startsWith("Deno")) {
      return Response.redirect("https://deno.land/x/kview/install.ts", 307);
    }
    return Response.redirect("/", 301);
  },
};
