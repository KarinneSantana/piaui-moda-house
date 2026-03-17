import Link from "next/link";
import React from "react";
import PostList from "./post-list";

// async function getData() {
//   const query = `
//     *[_type == 'post'] | order(publishedAt desc)[0...6] {
//   title,
//   "currentSlug": slug.current,
//   mainImage,
//   publishedAt,
//   smallDescription
// }
//   `;

//   const data = await client.fetch(query);

//   return data;
// }

export function BlogSection() {
  return (
    <section className="py-24 text-center">
      <div className="w-full max-w-6xl mx-auto space-y-12 px-8">
        <Link href="/blog" className="block" prefetch>
          <h2 className="font-medium tracking-widest text-xl uppercase">
            Blog
          </h2>
        </Link>

        <PostList />
      </div>
    </section>
  );
}
