import fs from "fs";
import matter from "gray-matter";
import markdownIt from "markdown-it";
import Link from "next/link";
import highlightjs from "markdown-it-highlightjs";
import mdcopy from "markdown-it-code-copy";
import { createOgImage } from "../../components/lib/createOgImage";
import Head from "next/head";
const options = {
  iconStyle: "font-size: 21px; opacity: 0.4; color:black;",
  buttonStyle:
    "position: absolute; z-index:20; height:40px; width:30px ; background-color:gray; top: 7.5px; right: 6px; cursor: pointer; outline: none;",
  iconClass: "mdi mdi-content-copy",
  buttonClass: "",
};

const markdown = new markdownIt({});
markdown.use(highlightjs);
markdown.use(mdcopy, options);

export async function getStaticPaths() {
  const files = fs.readdirSync("posts/javascriptposts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/javascriptposts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  const ogImage = createOgImage({
    title: frontmatter.metaTitle,
    meta: ["jsblog.info"],
  });

  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={frontmatter.metaTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="prose md:mx-auto dark:text-js-yellow font-bold mb-10 ">
        <Link href="/jsblogs">
          <span className="flex items-center gap-1 cursor-pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </span>
        </Link>
      </div>
      <div className="prose px-2 sm:px-0 dark:prose-slate dark:prose-headings:text-js-yellow dark:prose-code:text-slate-200 dark:prose-strong:text-yellow-100 prose-img:flex prose-img:justify-center dark:prose-blockquote:text-gray-200   mx-auto dark:text-white  ">
        <h1 className="dark:text-white">{frontmatter.title}</h1>
        <div className="flex justify-between items-center h-9">
          <div className="flex flex-col">
            <span>{frontmatter.author}</span>
            <span>{frontmatter.date}</span>
          </div>
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-header dark:ring-white"
            src={`/${frontmatter.socialImage}`}
            alt={frontmatter.author}
          />
        </div>

        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div
          className="dark:text-white"
          dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
        />
      </div>
      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex-col justify-center items-center mx-auto prose py-5">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Like
          </span>{" "}
          my blogs ?
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          You can give this github repo a ⭐
          <a
            href="https://github.com/pranikz/Just-another-javascript-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Here
            <svg
              aria-hidden="true"
              className="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </p>
      </div>
    </>
  );
}
