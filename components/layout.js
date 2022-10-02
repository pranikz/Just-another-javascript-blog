import Link from "next/link";
import { LogoIcon } from "./assets/icons";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/floating-cogs.svg')] bg-opacity-10">
      <header className="bg-[#316B83] dark:bg-gray-800 mb-8 py-4 px-2">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a className="mt-1">
              <LogoIcon />
            </a>
          </Link>
          <span className="mx-auto text-white mt-2 text-lg">
            Just another{" "}
            <span className="text-yellow-500 font-semibold">Javascript</span>{" "}
            Blog
          </span>
          <a
            href="https://github.com/pranikz/Just-another-javascript-blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-2 md:px-6 py-2 bg-[#eab308] hover:bg-[#d2a20e] focus:shadow-none border-black shadow-offset-black  hover:underline border-2 text-base text-gray-900 font-semibold">
              <span className="flex gap-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden md:inline-block"> Github</span>
              </span>
            </button>
          </a>
        </div>
      </header>
      <main className="container mx-auto flex-1  ">{children}</main>
      <footer className="bg-[#316B83] dark:bg-gray-800   py-4 text-white  ">
        <div className="container  md:flex mx-auto text-sm md:text-lg text-white font-normal md:justify-between text-center  ">
          <div>
            <span className="text-sm sm:text-center  ">
              © 2022 All Rights Reserved.
            </span>
          </div>
          <div className="flex">
            <ul className="flex flex-wrap items-center mx-auto gap-3 text-sm mt-3 sm:mt-0">
              <li className="hover:underline">
                <a
                  href="https://github.com/pranikz/Just-another-javascript-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="hover:underline">
                <Link href="/maintainers"> Maintainers</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
