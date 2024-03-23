// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $install from "./routes/install.ts";
import * as $kv_toolbox from "./routes/kv-toolbox.tsx";
import * as $CopyText from "./islands/CopyText.tsx";
import * as $CopyToClipboard from "./islands/CopyToClipboard.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/install.ts": $install,
    "./routes/kv-toolbox.tsx": $kv_toolbox,
  },
  islands: {
    "./islands/CopyText.tsx": $CopyText,
    "./islands/CopyToClipboard.tsx": $CopyToClipboard,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
