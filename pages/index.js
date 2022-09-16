import Image from "next/image";
import Link from "next/link";
import { GitIcon } from "../components/assets/icons";

export default function Home() {
  return (
    <div className="flex flex-wrap md items-center ">
      <div className=" w-full md:w-1/2 ">
        <div className="mx-16 md:mx-32">
          <h1 className="text-4xl md:text-6xl font-bold mt-16">
            Just another <span className="text-[#eab308]">Javascript</span> Blog
          </h1>
          {/* country region island */}
          {/* description */}
          <div className="description w-full mt-12  text-gray-500 text-lg">
            Brushup all your javascript skills at one place. No googling around
            all infos required about your interviews at one place.
          </div>
          <div className="flex flex-col sm:flex-row my-12 font-light text-gray-500 mx-12 sm:mx-0">
            <div className="pr-4">
              <button className="px-4 py-2 bg-[#eab308] border-black shadow-offset-black mt-5 hover:underline border-2 text-2xl text-gray-900 font-semibold pt-2">
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

          <div className="description w-full mt-12  text-gray-900 text-lg ">
            <div>Checkout our maintainers here!!</div>
            <div className="mx-12 sm:mx-0">
              <button className=" px-4 py-2 text-black bg-orange-300 border-black shadow-offset-black uppercase mt-5 text-lg font-semibold hover:underline border-2 rounded ">
                <Link href="/maintainers">maintainers</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
