import CodeBlock from "$components/CodeBlock.tsx";
import Footer from "$components/Footer.tsx";
import Meta from "$components/Meta.tsx";

export default function KvToolbox() {
  return (
    <>
      <Meta
        title="kv-toolbox: A toolbox for Deno KV"
        description="Batching atomic transactions, handling blobs, serializing entries and values to JSON, importing and exporting with NDJSON and more."
        image="https://kview.deno.dev/social-kv-toolbox.png"
      />
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              A toolbox for{" "}
              <a
                href="https://deno.com/kv"
                class="text-primary-700 dark:text-primary-500 underline underline-offset-8"
                target="_blank"
              >
                Deno KV
              </a>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Querying stores, working with blobs, utilities for keys, batched
              atomic transactions, encrypting values, and more.
            </p>
            <div class="mt-8 flex flex-col justify-center md:justify-start sm:flex-row gap-4">
              <div>
                <a
                  href="https://jsr.io/@kitsonk/kv-toolbox"
                  target="_blank"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  See the docs
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/logo-kv-toolbox.svg"
              alt="the kv-toolbox logo: a toolbox with several tools in it"
            />
          </div>
        </div>
      </section>
      <section class="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          <div class="lg:col-span-5 lg:mt-0">
            <a href="https://jsr.io/@deno/kv-utils" target="_blank">
              <img
                class="mb-4 h-40 w-40 sm:h-56 sm:w-56 md:h-full md:w-full"
                src="/images/deno_logo.svg"
                alt="Deno the dinosaur"
              />
            </a>
          </div>
          <div class="me-auto place-self-center lg:col-span-7">
            <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Official{" "}
              <a
                href="https://jsr.io/@deno/kv-utils"
                class="text-primary-700 dark:text-primary-500 underline"
                target="_blank"
              >
                <code>@deno/kv-utils</code>
              </a>{" "}
              adopts core <code>kv-toolbox</code> capabilities.
            </h1>
            <p class="mb-6 text-gray-500 dark:text-gray-400">
              JSON serialization, NDJSON import/export, and estimating the size
              of entries are now part of the official Deno KV utilities library.
            </p>
            <a
              href="https://jsr.io/@deno/kv-utils"
              target="_blank"
              class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Check it out
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              A comprehensive toolbox
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              <code>openKvToolbox()</code>{" "}
              allow access to most of the features of the library in an enriched
              that builds on top of <code>Deno.Kv</code>.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/~/openKvToolbox"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
          <CodeBlock
            code={`import { openKvToolbox } from "@kitsonk/kv-toolbox";

const file = await Deno.readFile("hello.jpeg");
const kv = await openKvToolbox();
await kv.setBlob(["hello.jpeg"], file);
kv.close();
`}
          />
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <CodeBlock
            code={`import {
  query,
  Filter
} from "@kitsonk/kv-toolbox/query";

const db = await Deno.openKv();
const result = query(db, { prefix: [] })
  .where(Filter.or(
    Filter.where("age", "<", 10),
    Filter.where("age", ">", 20),
  ))
  .get();
for await (const entry of result) {
  console.log(entry);
}
db.close();
`}
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Querying and filtering
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              A fluent API for querying Deno KV stores, including deep queries
              into values of entries.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/query/~"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Work with blobs
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Working with arbitrarily size blobs like{" "}
              <code>Uint8Array</code>s, byte <code>ReadableStream</code>s,{" "}
              <code>Blob</code>s and{" "}
              <code>File</code>s, stream blob values to a browser, and manage
              Deno KV's 64k per entry value limit.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/blob/~"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
          <CodeBlock
            code={`import {
  get,
  getAsBlob,
  getAsJSON,
  getAsResponse,
  getAsStream,
  getMeta,
  remove,
  set,
  toJSON,
  toValue,
} from "@kitsonk/kv-toolbox/blob";
`}
          />
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <CodeBlock
            code={`import {
  equals,
  keys,
  partEquals,
  startsWith,
  tree,
  unique,
  uniqueCount,
} from "@kitsonk/kv-toolbox/keys";
`}
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Unlock Deno KV keys
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Make working with Deno KV keys easier, especially when using a
              sub-key pattern.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/keys/~"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Batched atomics
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Create atomic transactions without having to worry about Deno KV's
              limitations per transaction as well as provide atomic transactions
              for blobs via <code>.checkBlob()</code> and{" "}
              <code>.setBlob()</code>.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/batched_atomic/~"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
          <CodeBlock
            code={`import {
  batchedAtomic,
} from "@kitsonk/kv-toolbox/batched_atomic";

const kv = await Deno.openKv();
await batchedAtomic(kv)
  .check({ key: ["hello"], versionstamp: null })
  .checkBlob({ key: ["video"], versionstamp: null })
  .set(["hello"], "deno kv")
  .setBlob(
    ["video"],
    new Blob([], { type: "video/mp4" }),
  )
  .commit();

await kv.close();
`}
          />
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <CodeBlock
            code={`import {
  generateKey,
  openCryptoKv,
} from "@kitsonk/kv-toolbox/crypto";

const kv = await openCryptoKv(generateKey());
const res = await kv.setBlob(
  ["hello"],
  window.crypto.getRandomValues(new Uint8Array(65_536)),
);
if (res.ok) {
  const maybeValue = await kv.getBlob(["hello"]);
  await kv.deleteBlob(["hello"]);
}
kv.close();
`}
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Store encrypted values
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Encrypt and decrypt Deno KV values, ensuring that data at rest is
              secure.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/crypto/~"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
