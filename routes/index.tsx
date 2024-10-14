import Footer from "$components/Footer.tsx";
import Meta from "$components/Meta.tsx";
import CopyToClipboard from "$islands/CopyToClipboard.tsx";

export default function Home() {
  return (
    <>
      <Meta
        title="kview: a web app for Deno KV"
        description="View, edit, add, delete, watch, import and export your Deno KV data be it local or remote."
      />
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Your user interface to{" "}
              <a
                href="https://deno.com/kv"
                class="text-primary-700 dark:text-primary-500 underline underline-offset-8"
                target="_blank"
              >
                Deno KV
              </a>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              View, edit, add, delete, watch, import and export your{" "}
              <a
                href="https://deno.com/kv"
                class="text-primary-700 dark:text-primary-500 underline underline-offset-4"
                target="_blank"
              >
                Deno KV
              </a>{" "}
              data be it local or remote.
            </p>
            <div class="mt-8 flex flex-col justify-center md:justify-start sm:flex-row gap-4">
              <div>
                <a
                  href="/docs"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
              <div class="flex justify-center">
                <CopyToClipboard text="deno run -A -r https://kview.deno.dev/install" />
              </div>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/logo.svg" alt="the kview logo: a pair of 3-D glasses" />
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
          <div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                A complete solution
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                Fully leverage the features of Deno KV via a rich web interface.
                Support advanced use cases like arbitrary sized binary data
                including rich media.
              </p>
              <ul
                role="list"
                class="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
              >
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    >
                    </path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Connect to local and remote stores
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    >
                    </path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    View, create and update entries
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    >
                    </path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Monitor changes to values in real time
                  </span>
                </li>
              </ul>
              <p class="mb-8 font-light lg:text-xl">
                View the{" "}
                <a
                  href="/docs"
                  class="text-primary-700 dark:text-primary-500 underline"
                >
                  documentation
                </a>{" "}
                to see all the features and how to get started.
              </p>
            </div>
            <img
              class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-md"
              src="/images/hero.png"
              alt="office feature image"
            />
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              kview leverages kv-toolbox
            </h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              A toolbox for Deno KV.
            </p>
            <a
              href="/kv-toolbox"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Check out kv-toolbox
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
