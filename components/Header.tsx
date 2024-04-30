import IconGitHub from "./icons/GitHub.tsx";

export default function Header() {
  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed w-full z-50">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img
              src="/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="kview Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              kview
            </span>
          </a>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 dark:hover:bg-gray-700 hover:bg-gray-50 text-white rounded lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kitsonk/kview"
                  target="_blank"
                  class="flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <IconGitHub />
                  <span class="pl-1">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kitsonk/kview?tab=coc-ov-file#contributor-covenant-code-of-conduct"
                  target="_blank"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kitsonk/kview/blob/main/docs/CONTRIBUTING.md"
                  target="_blank"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
