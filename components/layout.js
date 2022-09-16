import Link from "next/link";
import { LogoIcon, GitIcon, LinkedinIcon } from "./assets/icons";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/floating-cogs.svg')] bg-opacity-10">
      <header className="bg-[#316B83] mb-8 py-4 px-2">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>
          <span className="mx-auto text-white  text-lg">
            Just another{" "}
            <span className="text-yellow-500 font-semibold shadow">
              Javascript
            </span>{" "}
            Blog
          </span>

          <div className="bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full ">
            <div className="bg-white rounded-full  ">
              <a
                href="https://github.com/pranikz/Just-another-javascript-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1  bg-opacity-90 ">
        {children}
      </main>
      <footer className="bg-[#A6D1E6] mt-8 py-4 text-white flex">
        <div className="container mx-auto flex justify-center text-sm md:text-lg text-black font-bold">
          made with❤️by&nbsp;
          
            <a
            className="underline"
              href="https://pranikz.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pranikz
           
          </a>
        </div>
        
      </footer>
    </div>
  );
}
