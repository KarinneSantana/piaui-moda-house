"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const POST_QUERY = `
    *[_type == 'post'] | order(publishedAt desc)[0...6] {
  title,
  "currentSlug": slug.current,
  mainImage,
  publishedAt,
  smallDescription
}
  `;

export async function fetchPost() {
  try {
    const posts = await client.fetch(POST_QUERY);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export default function PostList() {
  const { data, isLoading } = useQuery<BasicBlogPost[]>({
    queryKey: ["posts"],
    queryFn: fetchPost,
    initialData: [],
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {isLoading && <div>Carregando...</div>}
      {data.map((post, index) => (
        <Link
          href={`/blog/${post.currentSlug}`}
          key={`${post.currentSlug}-${index}`}
          className="group flex flex-col items-start"
        >
          <div className="relative h-60 md:h-60 w-full overflow-hidden rounded-xl">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={`${post.currentSlug}-${post.title}`}
              fill
              className="bg-cover bg-center bg-no-repeat rounded-xl group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h4 className="font-bold mt-2 line-clamp-3 opacity-85 group-hover:opacity-100 text-start">
            {post.title}
          </h4>
          <span className="text-sm mt-1">
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "short",
            }).format(new Date(post.publishedAt))}
          </span>
        </Link>
      ))}
    </div>
  );
}
