import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
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
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
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
    <div className="prose mx-auto  ">
      <h3>
        <Link href="/jsblogs">Back to all blogs</Link>
      </h3>
      <h1 className="">{frontmatter.title}</h1>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
  );
}
