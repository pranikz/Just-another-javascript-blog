import Head from "next/head";
import Link from "next/link";
import Lottie from "react-lottie";
import Button from "../components/Button";
import { createOgImage } from "../components/lib/createOgImage";
import animationData from "../public/coding_1.json";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const ogImage = createOgImage({
    title: "Just Another Javascript Blog",
    meta: ["jsblog.info"],
  });
  return (
    <>
    <Head>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={"Just Another Javascript Blog"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    
      <div className="flex flex-wrap my-2 ">
        <div className=" w-full md:w-1/2 ">
          <div className="mx-20 md:mx-32">
            <h1 className="text-4xl md:text-6xl font-bold mt-16">
              Just another{" "}
              <span className="text-[#eab308] dark:text-[#eab308]">
                Javascript
              </span>{" "}
              Blog
            </h1>
            <div className="description w-full mt-12  text-gray-500 dark:text-white text-lg">
              Brushup all your javascript skills at one place. No googling
              around all infos required about your interviews at one place.
            </div>
            <div className="flex w-full flex-col sm:flex-row my-12 font-light text-gray-500  sm:mx-0 md:justify-between gap-3 md:gap-0">
              <div className="pr-4">
                <Button className="w-full md:w-32 bg-js-yellow text-2xl h-12 ">
                  <Link href="/jsblogs">Javascript</Link>
                </Button>
              </div>
              <div className="pr-4">
                <Button className="w-full md:w-32   bg-react-blue text-2xl h-12 ">
                  <Link href="/reactblogs">ReactJS</Link>
                </Button>
              </div>
              <div className="pr-4">
                <Button className="w-full md:w-32 bg-dsa-orange text-2xl h-12">
                  <Link href="/dsablogs">DSA</Link>
                </Button>
              </div>
            </div>
            <span className="text-lg text-gray-500 dark:text-white ">
              {" "}
              Want to code your heart out while learning?? Checkout our
              Playgounds
            </span>
            <div className="flex md:justify-evenly md:w-full flex-col md:flex-row justify-center my-5 gap-3">
              <div className="pr-4 md:w-1/2 ">
                <Button className="w-full px-2 bg-js-yellow text-xl h-12 ">
                  <Link href="/JSplayground">JS Playground</Link>
                </Button>
              </div>
              <div className="pr-4 md:w-1/2">
                <Button className=" w-full  px-2 bg-react-blue text-xl h-12">
                  <Link href="/ReactPlayground">⚛️ Playgound</Link>
                </Button>
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
    </>
  );
}
