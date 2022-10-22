import fs from "fs";
import matter from "gray-matter";
import markdownIt from "markdown-it";
import Link from "next/link";
import highlightjs from "markdown-it-highlightjs";
import mdcopy from "../../components/functionality/Codecopy";

const options = {
  buttonClass: "hello",
  iconStyle: "font-size: 21px; opacity: 0.9; color: white;",
  buttonStyle:
    "position: absolute; z-index:20;    width: 25px;     height: 20px; top: 10.5px; right: 6px; cursor: pointer; outline: none;",
};

const markdown = new markdownIt({});
markdown.use(highlightjs);
markdown.use(mdcopy, options);

export async function getStaticPaths() {
  const files = fs.readdirSync("posts/reactposts");
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
  const fileName = fs.readFileSync(`posts/reactposts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <div className="prose md:mx-auto dark:text-react-blue font-bold mb-10 ">
        <Link href="/reactblogs">
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
      <div className="prose dark:prose-slate dark:prose-headings:text-react-blue dark:prose-code:text-slate-200 dark:prose-strong:text-yellow-100 prose-img:flex prose-img:justify-center dark:prose-blockquote:text-gray-200   mx-auto dark:text-white  ">
        <h1 className="dark:text-white">{frontmatter.title}</h1>
        <div
          className="dark:text-white"
          dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
        />
      </div>
    </>
  );
}
