import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts/javascriptposts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `posts/javascriptposts/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0 ">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border-4 border-black  m-2 rounded-xl shadow-offset-black-big overflow-hidden flex flex-col bg-white dark:bg-inherit"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4 dark:text-white dark:bg-gray-800">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
