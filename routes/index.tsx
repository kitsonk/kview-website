import Footer from "$components/Footer.tsx";
import CopyToClipboard from "$islands/CopyToClipboard.tsx";

export default function Home() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Your user interface to{" "}
              <a
                href="https://deno.com/kv"
                class="text-primary-700 dark:text-primary-500"
                target="_blank"
              >
                Deno KV
              </a>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              View, edit, add, delete, watch, import and export your{" "}
              <a
                href="https://deno.com/kv"
                class="text-primary-700 dark:text-primary-500"
                target="_blank"
              >
                Deno KV
              </a>{" "}
              data be it local or remote.
            </p>
            <div class="mt-8 flex flex-col justify-center md:justify-start sm:flex-row gap-4">
              <div>
                <a
                  href="/docs/getting-started"
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
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Full featured access to your data
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              kview focuses on providing a rich interface into{" "}
              <a
                href="https://deno.com/kv"
                class="text-primary-700 dark:text-primary-500"
                target="_blank"
              >
                Deno KV
              </a>{" "}
              stores, locally or remote.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m109.41 414.11h105.98c7.3164 0 14.078-3.9023 17.734-10.238 3.6602-6.3398 3.6602-14.145 0-20.48-3.6562-6.3359-10.418-10.242-17.734-10.242h-105.98c-5.4297 0-10.641-2.1562-14.48-5.9961-3.8398-3.8438-6-9.0508-6-14.484v-194.56h67.996c9.5039 0 18.621-3.7773 25.34-10.496 6.7227-6.7227 10.5-15.84 10.5-25.344v-68.043h114.43c5.4336 0 10.641 2.1562 14.48 5.9961 3.8438 3.8398 6 9.0508 6 14.48v173.62c0 7.3164 3.9023 14.078 10.242 17.734 6.3359 3.6602 14.141 3.6602 20.477 0 6.3398-3.6562 10.242-10.418 10.242-17.734v-173.62c0-16.293-6.4727-31.922-17.996-43.441-11.523-11.523-27.148-17.996-43.445-17.996h-134.91c-1.3594 0-2.7148 0.13672-4.0469 0.41016-0.83203 0.20312-1.6562 0.45703-2.457 0.76562l-1.3828 0.41016c-0.86328 0.38672-1.7031 0.83203-2.5078 1.332l-1.0234 0.5625c-1.0859 0.73828-2.0977 1.5781-3.0234 2.5078l-103.88 103.63c-0.93359 0.94141-1.7734 1.9688-2.5078 3.0742 0 0.30859-0.30859 0.61328-0.51172 0.92188-0.52344 0.83594-0.98828 1.707-1.3828 2.6094 0 0.41016-0.25781 0.87109-0.41016 1.2812-0.3125 0.81641-0.56641 1.6562-0.76953 2.5078-0.26953 1.332-0.40625 2.6875-0.41016 4.0469v215.04c-0.078125 16.348 6.3555 32.055 17.887 43.641 11.531 11.59 27.207 18.105 43.555 18.105zm8.5-296.96 33.895-33.895v33.895z" />
                    <path d="m282.93 182.99h-148.99c-7.3164 0-14.074 3.9023-17.734 10.242-3.6602 6.3359-3.6602 14.141 0 20.477 3.6602 6.3398 10.418 10.242 17.734 10.242h148.99c7.3164 0 14.078-3.9023 17.738-10.242 3.6562-6.3359 3.6562-14.141 0-20.477-3.6602-6.3398-10.422-10.242-17.738-10.242z" />
                    <path d="m282.93 244.43h-148.99c-7.3164 0-14.074 3.9023-17.734 10.238-3.6602 6.3359-3.6602 14.145 0 20.48 3.6602 6.3359 10.418 10.242 17.734 10.242h148.99c7.3164 0 14.078-3.9062 17.738-10.242 3.6562-6.3359 3.6562-14.145 0-20.48-3.6602-6.3359-10.422-10.238-17.738-10.238z" />
                    <path d="m419.48 425.21c16.312-25.895 18.758-58.184 6.5391-86.242s-37.52-48.262-67.59-53.961c-30.07-5.7031-61.012 3.8359-82.652 25.477s-31.18 52.586-25.48 82.652c5.6992 30.07 25.902 55.375 53.961 67.594 28.062 12.219 60.348 9.7695 86.246-6.5391l38.555 38.555h-0.003906c5.1797 5.1758 12.723 7.1953 19.793 5.3008 7.0742-1.8945 12.598-7.418 14.492-14.488 1.8945-7.0703-0.12891-14.617-5.3047-19.793zm-129.18-48.996c0-13.582 5.3945-26.602 14.996-36.203 9.6016-9.6055 22.625-14.996 36.203-14.996s26.602 5.3906 36.203 14.996c9.6016 9.6016 14.996 22.621 14.996 36.203 0 13.578-5.3945 26.602-14.996 36.203-9.6016 9.6016-22.625 14.996-36.203 14.996s-26.602-5.3945-36.203-14.996c-9.6016-9.6016-14.996-22.625-14.996-36.203z" />
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">View</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Ability to see Deno KV entries in all their forms, including
                complex types like <code>Uint8Array</code>s and{" "}
                <code>Error</code> instances.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m84.48 442.88c1.5352 0 3.0703 0 4.0977-0.51172l107.01-31.23c5.6328-1.5352 11.266-4.6094 15.359-9.2148l220.67-220.67c6.6562-6.6562 10.238-15.871 10.238-25.602 0-9.7266-3.5859-18.434-10.238-25.09l-50.688-50.688c-13.824-13.824-36.863-13.824-50.688 0l-220.16 220.67c-4.0977 4.0977-7.168 9.7266-9.2148 15.359l-31.23 107.01c-1.5352 5.1211 0 11.266 4.0977 15.359 3.0703 3.0742 7.1641 4.6094 10.75 4.6094zm209.41-282.62 57.855 57.855-152.06 152.06-57.855-57.855zm58.883-58.883c1.0234-1.0234 2.5586-1.5352 3.5859-1.5352 1.5352 0 2.5586 0.51172 3.5859 1.5352l50.688 50.688c1.0234 1.5352 1.5352 3.0703 1.5352 3.5859 0 0.51172 0 2.5586-1.5352 3.5859l-36.867 36.863-57.859-57.859zm-226.82 238.08 46.078 46.078-65.023 18.945z" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Update</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Update complex entry values like <code>Date</code> or{" "}
                <code>RegExp</code>{" "}
                and arbitrary objects, including the ability to ensure
                transactional consistency.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m442.88 271.36v-30.719c0-15.16-1.8398-17.922-17.922-17.922h-135.68v-135.68c0-15.16-2.457-17.922-17.922-17.922h-30.719c-15.871 0-23.039 2.7578-23.039 17.922v135.68h-140.8c-15.16 0-23.039 2.457-23.039 17.922v30.719c0 15.871 7.8789 23.039 23.039 23.039h140.8v140.8c0 15.461 7.4805 23.039 23.039 23.039h30.719c15.16 0 17.922-6.957 17.922-23.039v-140.8h135.68c15.461 0 17.918-7.4805 17.918-23.039z" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Add
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Add entries, including setting expiration timeouts.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m399.87 125.44h-204.8c-17.922 0-34.816 6.6562-47.617 18.945l-96.254 91.645c-5.1211 5.1211-8.1914 12.289-8.1914 19.969s3.0703 14.848 8.7031 19.969l95.742 91.137c12.801 12.289 29.695 18.945 47.617 18.945h204.8c37.887 0 69.121-31.23 69.121-69.121v-122.37c0-37.887-31.23-69.117-69.121-69.117zm-59.902 192.51-37.887-36.352-36.352 37.887-25.602-25.09 36.352-37.887-37.887-36.352 25.09-25.602 37.887 36.352 36.352-37.887 25.602 25.09-36.352 37.887 37.887 36.352z" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Delete</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Delete individual entries or in bulk.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m442.37 268.29c5.6328-7.168 5.6328-16.895 0-24.062-3.582-4.0977-83.969-98.305-186.37-98.305s-182.79 93.695-186.37 97.793c-5.6328 7.168-5.6328 16.895 0 24.062 3.582 4.0938 83.969 98.301 186.37 98.301s182.79-94.207 186.37-97.789zm-201.21-74.242c12.801 0 23.039 10.238 23.039 23.039 0 12.801-10.238 23.039-23.039 23.039-12.801 0-23.039-10.238-23.039-23.039 0-12.797 10.238-23.039 23.039-23.039zm14.848 134.66c-65.023 0-122.37-49.152-145.92-72.703 14.848-14.848 43.52-39.938 79.359-56.32-3.5859 8.7031-5.6328 17.922-5.6328 28.16 0 39.938 32.258 72.703 72.703 72.703 39.938 0 72.703-32.258 72.703-72.703 0-9.7266-2.0469-19.457-5.6328-28.16 35.84 16.383 64.512 41.473 79.359 56.32-24.57 23.551-81.914 72.703-146.94 72.703z" />
                    <path d="m18.945 198.66h25.602c3.5859 0 6.1445-3.0703 6.1445-6.1445l-0.003906-88.574h88.574c3.5859 0 6.1445-3.0703 6.1445-6.1445v-25.602c0-3.5859-3.0703-6.1445-6.1445-6.1445h-120.32c-3.5859 0-6.1445 3.0703-6.1445 6.1445v120.32c0 3.5859 3.0703 6.1445 6.1445 6.1445z" />
                    <path d="m139.78 408.06h-88.578v-88.574c0-3.5859-3.0703-6.1445-6.1445-6.1445h-25.602c-3.5859 0-6.1445 3.0703-6.1445 6.1445v120.32c0 3.5859 3.0703 6.1445 6.1445 6.1445h120.32c3.5859 0 6.1445-3.0703 6.1445-6.1445v-25.602c0.003906-3.0703-3.0703-6.1445-6.1406-6.1445z" />
                    <path d="m493.05 65.535h-120.83c-3.5859 0-6.1445 3.0703-6.1445 6.1445v25.602c0 3.5859 3.0703 6.1445 6.1445 6.1445h88.578v88.574c0 3.5859 3.0703 6.1445 6.1445 6.1445h25.602c3.5859 0 6.1445-3.0703 6.1445-6.1445l-0.003906-119.81c0.51172-3.582-2.5586-6.6562-5.6328-6.6562z" />
                    <path d="m493.05 313.34h-25.602c-3.5859 0-6.1445 3.0703-6.1445 6.1445v88.574h-89.086c-3.5859 0-6.1445 3.0703-6.1445 6.1445v25.602c0 3.5859 3.0703 6.1445 6.1445 6.1445h120.32c3.5859 0 6.1445-3.0703 6.1445-6.1445v-120.32c0.51172-3.5859-2.5586-6.1445-5.6328-6.1445z" />
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Watch
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Monitor changes of entry values in real time.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m312 256v-120c0-13.199-10.801-24-24-24h-232c-13.199 0-24 10.801-24 24v128h272c4.3984 0 8-3.6016 8-8zm-76-60h-108.72l18.398 18.32c5.1016 4.7812 1.1992 13.941-5.6797 13.68-2.0781 0-4.0781-0.80078-5.6797-2.3203l-32-32c-3-3.0195-3-8.3398 0-11.359l32-32c7.4805-7.3594 18.719 3.8789 11.359 11.359l-18.398 18.32h108.72c10.461 0.17969 10.559 15.801 0 16z" />
                    <path d="m441.28 356c0 24.301-19.699 44-44 44s-44-19.699-44-44 19.699-44 44-44 44 19.699 44 44" />
                    <path d="m191.44 356c0 24.301-19.699 44-44 44-24.301 0-44-19.699-44-44s19.699-44 44-44c24.301 0 44 19.699 44 44" />
                    <path d="m400 251.68h77.598l-22.398-61.68c-5.7617-15.68-20.879-26.32-37.602-26.32h-25.602v80c0 4.3984 3.6016 8 8 8z" />
                    <path d="m400 267.68c-13.199 0-24-10.719-24-24v-80h-48v92.32c0 13.199-10.801 24-24 24h-272v56.004c0 13.199 10.801 24 24 24h31.68c-0.16016-1.3594-0.23828-2.6406-0.23828-4 0-33.121 26.879-60 60-60s60 26.879 60 60c0 1.3594-0.078125 2.6406-0.23828 4h130.32c-0.16016-1.3594-0.23828-2.6406-0.23828-4 0-33.121 26.879-60 60-60s60 26.879 60 60c0 1.2812-0.078125 2.6406-0.23828 3.9219 12.719-0.48047 22.961-11.039 22.961-23.922v-68.32z" />
                  </g>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Import and Export
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Bulk importing and exporting to flat files, make it possible to
                store offline and transfer your data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
