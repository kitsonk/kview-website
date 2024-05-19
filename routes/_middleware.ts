import type { FreshContext } from "$fresh/server.ts";
import { GA4Report, isDocument } from "@kitsonk/ga4";

export async function handler(request: Request, ctx: FreshContext) {
  const response = await ctx.next();
  if (isDocument(request, response)) {
    queueMicrotask(async () => {
      const report = new GA4Report({ request, response, conn: ctx });
      await report.send();
    });
  }
  return response;
}
