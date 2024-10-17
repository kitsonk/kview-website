import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="kview.deno.dev" />
        <meta name="twitter:url" content="https://kview.deno.dev" />
        <meta name="twitter:site" content="@kitsonk" />
        <meta name="twitter:creator" content="@kitsonk" />

        <meta property="og:site_name" content="kview: a web app for Deno KV" />
        <meta property="og:url" content="https://kview.deno.dev" />
        <meta property="og:locale" content="en_AU" />

        <meta
          name="keywords"
          content="deno, kv, javascript, typescript, deno kv, application"
        />

        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="dark:bg-gray-900 dark:text-white h-full">
        <Component />
      </body>
    </html>
  );
}
