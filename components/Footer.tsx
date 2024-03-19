export default function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="/logo.svg"
            class="h-8 mr-2"
            alt="the kview logo: a pair of 3-D glasses"
          />{" "}
          kview
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          A web application for Deno KV.
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kitsonk/kview"
              target="_blank"
              class="mr-4 hover:underline md:mr-6"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kitsonk/kview?tab=coc-ov-file#contributor-covenant-code-of-conduct"
              target="_blank"
              class="mr-4 hover:underline md:mr-6 "
            >
              Code of Conduct
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kitsonk/kview/blob/main/docs/CONTRIBUTING.md"
              target="_blank"
              class="mr-4 hover:underline md:mr-6 "
            >
              Contribute
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://kitsonkelly.com/"
            target="_blank"
            class="hover:underline"
          >
            Kitson P. Kelly
          </a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
