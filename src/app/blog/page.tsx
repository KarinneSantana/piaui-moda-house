import { Metadata } from "next";
import PostList from "./post-list";

export const metadata: Metadata = {
  title: "Blog | Piauí Moda House",
  description:
    "O Piauí Moda House celebra em 2025 uma década de resistência criativa e protagonismo cultural.",
  icons: {
    icon: "/pmh-black.png",
    shortcut: "/pmh-black.png",
  },
  keywords: ["Moda", "Piauí", "House", "Piauí Moda House", "Blog", "Notícias"],
  openGraph: {
    title: "Blog | Piauí Moda House",
    description:
      "O Piauí Moda House celebra em 2025 uma década de resistência criativa e protagonismo cultural.",
    url: "https://www.piauimodahouse.com/pmh-black.png",
    siteName: "Piauí Moda House",
    images: [
      {
        url: "https://www.piauimodahouse.com/pmh-black.png",
        width: 800,
        height: 600,
        alt: "Piauí Moda House",
      },
    ],
  },
};

export default async function BlogPage() {
  // const data: BasicBlogPost[] = await getData();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full pt-36 pb-32 bg-gradient-to-tr from-[#E97F40] via-[#E66A31] to-[#E14918] text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-widest">Blog</h1>
      </section>

      <div className="mt-20 sm:mt-28 pb-28 w-full max-w-6xl mx-auto px-8">
        <PostList />
      </div>
    </div>
  );
}
