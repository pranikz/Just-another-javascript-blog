import Head from "next/head";

export default function Home() {
  const ogImage = createOgImage({
    title: "React playground",
    meta: ["jsblog.info"],
  });
  return (
    <>
    <Head>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={"React playground"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        <h1 className="text-2xl md:text-7xl flex justify-center">
          Welcome to React playground
        </h1>
        <div className="hidden md:inline-block  border-2 border-black shadow-offset-black-big my-10 aspect-w-16 aspect-h-9 w-full ">
          <iframe
            src="https://stackblitz.com/edit/react-fssmsz?ctl=1&devToolsHeight=33&embed=1&file=src/App.js&theme=dark"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </div>
        <div className="md:hidden mt-10 flex justify-center">
          Please open this in desktop browser
        </div>
      </div>
    </>
  );
}
