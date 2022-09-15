import Link from "next/link";
import { LogoIcon, GitIcon, LinkedinIcon } from "./assets/icons";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#554994]">
      <header className="bg-[#16213E] mb-8 py-4 px-2">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>
          <span className="mx-auto text-white text-lg">
            Just another <span className="text-yellow-500">Javascript</span>{" "}
            Blog
          </span>

          <div className="bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full ">
            <div className="bg-white rounded-full  ">
              <a
                href="https://github.com/pranikz/Just-another-javascript-blog"
                target="_blank"
              >
                <GitIcon />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1 ">{children}</main>
      <footer className="bg-[#E94560] mt-8 py-4 text-white flex">
        <div className="container mx-auto flex justify-center text-lg text-black font-bold">
          &copy; 2022&nbsp;
          <span>
            <a href="https://pranikz.netlify.app" target="_blank">
              Pranikz
            </a>
          </span>
        </div>
        <div className="container mx-auto flex justify-center gap-3">
          <a href="https://www.linkedin.com/in/pranikz/" target="_blank">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/pranikz/" target="_blank">
            <GitIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
