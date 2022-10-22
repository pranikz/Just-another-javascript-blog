import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter(({ frontmatter }) =>
    frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <div className="relative max-w-md sm:max-w-2xl md:max-w-full mb-4 flex justify-center">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0 ">
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map(({ slug, frontmatter }) => (
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
                <h1 className="p-4 dark:text-white dark:bg-gray-800">
                  {frontmatter.title}
                </h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
