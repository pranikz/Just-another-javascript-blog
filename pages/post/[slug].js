import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";

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
  return (
    <div className="prose dark:prose-invert mx-auto dark:text-white  ">
      <h3>
        
        <Link href="/jsblogs">
          <span className="dark:text-white border-red-600 dark:border-red-800">Back to all blogs</span>
        </Link>
      </h3>
      <h1 className="dark:text-white">{frontmatter.title}</h1>
      <div
        className="dark:text-white"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
  );
}
