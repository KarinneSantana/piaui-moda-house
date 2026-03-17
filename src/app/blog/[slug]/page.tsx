import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Post } from "./post";

async function getData(slug: string) {
  const query = `
        *[_type == 'post' && slug.current == '${slug}'] {
  'currentSlug': slug.current,
    title,
    body,
    mainImage,
    publishedAt
}[0]
    `;

  const data = await client.fetch(query);
  return data;
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data: BasicBlogPost = await getData(slug);

  if (!data) {
    return {};
  }

  return {
    title: data.title,
    description: data.smallDescription,
    robots: "index, follow",
    openGraph: {
      images: [
        {
          url: urlFor(data.mainImage).url(),
          alt: data.title,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <div className="mt-28 space-y-8 w-full max-w-6xl mx-auto px-8">
      <div>
        <Link href="/" prefetch className="flex items-center gap-2">
          {" "}
          <Image
            src={"/icons/arrow-left.svg"}
            alt="Icon Arrow Left"
            width={24}
            height={24}
          />{" "}
          Voltar
        </Link>
      </div>
      <Post slug={slug} />
    </div>
  );
}
