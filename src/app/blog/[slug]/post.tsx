"use client";

import { Loading } from "@/components/loading";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import { getImageDimensions } from "@sanity/asset-utils";
import { useQuery } from "@tanstack/react-query";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";

function getData(slug: string) {
  const query = `
        *[_type == 'post' && slug.current == '${slug}'] {
  'currentSlug': slug.current,
    title,
    body,
    mainImage,
    publishedAt
}[0]
    `;

  return query;
}

export async function fetchPost(slug: string) {
  try {
    const post = await client.fetch(getData(slug));
    return post;
  } catch (error) {
    console.log(error);
  }
}

type PostProps = {
  slug: string;
};

export function Post({ slug }: PostProps) {
  const router = useRouter();
  const { data, isLoading } = useQuery<BasicBlogPost>({
    queryKey: ["post"],
    queryFn: async () => await fetchPost(slug),
  });

  const ImageComponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value);
    return (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || ""}
        loading="lazy"
        width={width}
        height={height}
      />
    );
  };

  const components = {
    types: {
      image: ImageComponent,
    },
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    router.back();
    return null;
  }

  return (
    <>
      <h1 className="mt-2 block text-3xl leading-8 text-center font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>

      <span className="text-sm text-gray-400">
        {new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "medium",
        }).format(new Date(data.publishedAt))}
      </span>

      <Image
        src={urlFor(data.mainImage).url()}
        alt=""
        width={800}
        height={800}
        priority
        className="rounded-lg mx-auto w-full mt-8"
      />

      <div className="prose prose-[#858585] prose-h1:text-[#858585] pb-12 mx-auto">
        <PortableText value={data.body} components={components} />
      </div>
    </>
  );
}
