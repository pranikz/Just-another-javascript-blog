import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../public/coding.json";
import ThemeToggler from "../components/ThemeToggler";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-wrap ">
      <div className=" w-full md:w-1/2 ">
        <div className="mx-20 md:mx-32">
          <ThemeToggler />
          <h1 className="text-4xl md:text-6xl font-bold mt-16">
            Just another{" "}
            <span className="text-[#eab308] dark:text-[#eab308]">
              Javascript
            </span>{" "}
            Blog
          </h1>
          <div className="description w-full mt-12  text-gray-500 dark:text-white text-lg">
            Brushup all your javascript skills at one place. No googling around
            all infos required about your interviews at one place.
          </div>
          <div className="flex flex-col sm:flex-row my-12 font-light text-gray-500 mx-12 sm:mx-0">
            <div className="pr-4">
              <button className="px-4 py-2 bg-[#eab308]  border-black shadow-offset-black mt-5 hover:underline border-2 text-2xl text-gray-900 font-semibold pt-2">
                <Link href="/jsblogs">Javascript</Link>
              </button>
            </div>
            <div className="pr-4">
              <button className="px-7 py-2 bg-[#61dafb] border-black shadow-offset-black mt-5 hover:underline border-2 text-2xl text-gray-900 font-semibold pt-2">
                <Link href="/reactblogs">ReactJS</Link>
              </button>
            </div>
            <div className="pr-4">
              <button className="px-12 py-2 bg-orange-300 border-black shadow-offset-black mt-5 hover:underline border-2 text-2xl text-gray-900 font-semibold pt-2">
                <Link href="/dsablogs">DSA</Link>
              </button>
            </div>
          </div>

          {/* <div className="description w-full mt-12  text-gray-900 text-lg ">
            <div>Checkout our maintainers here!!</div>
            <div className="relative mx-11 sm:mx-0">
              <button className=" px-1.5 py-2 text-black bg-orange-300 border-black shadow-offset-black  mt-5 text-2xl font-semibold hover:underline border-2  ">
                <Link href="/maintainers">Maintainers</Link>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="hidden md:inline-block w-full md:w-1/2">
        <Lottie options={defaultOptions} height={600} width={500} />
      </div>
    </div>
  );
}
