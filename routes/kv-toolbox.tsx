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
              Serializing entries and values to JSON, importing and exporting
              with{" "}
              <a
                href="https://github.com/ndjson/ndjson-spec"
                class="text-primary-700 dark:text-primary-500 underline underline-offset-4"
                target="_blank"
              >
                NDJSON
              </a>, working with blobs, utilities for working with keys, batched
              atomic transactions and more.
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
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Represent Deno KV data as JSON
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Safely serialize and deserialize Deno KV entries, keys and values.
              Making it possible to work on KV data in browsers or other
              runtimes.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/json/~"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
          <CodeBlock
            code={`import {
  entryToJSON,
  entryMaybeToJSON,
  keyPartToJSON,
  keyToJSON,
  valueToJSON,
  toEntry,
  toEntryMaybe,
  toKeyPart,
  toKey,
  toValue,
} from "@kitsonk/kv-toolbox/json";
`}
          />
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <CodeBlock
            code={`import {
  exportEntries,
  exportToResponse,
  importEntries,
  LineTransformStream,
} from "@kitsonk/kv-toolbox/ndjson";
`}
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Handle streaming Deno KV data
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              New line delimitated JSON (<a
                href="https://github.com/ndjson/ndjson-spec"
                class="text-primary-700 dark:text-primary-500 underline underline-offset-2"
                target="_blank"
              >
                NDJSON
              </a>) is the most straight forward way of handling Deno KV data in
              a serialized format.
            </p>
            <a
              href="https://jsr.io/@kitsonk/kv-toolbox/doc/ndjson/~"
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
      <Footer />
    </>
  );
}
