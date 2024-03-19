import { Head } from "$fresh/runtime.ts";

export default function Meta(
  {
    title,
    description,
    image = "/social.png",
    alt = "kview: a web app for Deno KV",
    type = "website",
  }: {
    title: string;
    description?: string;
    image?: string;
    alt?: string;
    type?: "website" | "article";
  },
) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />

      {description && (
        <>
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
        </>
      )}

      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={alt} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={alt} />

      <meta property="og:type" content={type} />
    </Head>
  );
}
