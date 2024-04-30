#!/usr/bin/env -S deno run -A --unstable-kv --watch=static/,routes/,utils/,docs/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "@std/dotenv/load";

import { load } from "./utils/docs.ts";

const db = Deno.args.includes("build")
  ? Deno.env.get("DENO_KV_PRD")
  : undefined;

await load(db);

await dev(import.meta.url, "./main.ts", config);
