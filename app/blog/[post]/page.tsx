import Image from "next/legacy/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PostType } from "@/types";
import { getSinglePost } from "@/lib/sanity.query";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "../../components/shared/CustomPortableText";
import { BiChevronRight, BiCalendar, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import SharePost from "../../components/shared/SharePost";
import FeaturedPosts from "../../components/pages/FeaturedPosts";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import Buymeacoffee from "@/app/components/shared/Buymeacoffee";
import client from "@/lib/sanity.client";

// export const revalidate = 40;

type Props = {
  params: {
    post: string;
  };
};

// TODO: Fix this
// export async function generateStaticParams() {
//   const query = `*[_type == "post"]
//   {
//     slug
//   }`;
//   const slugs: PostType[] = await client.fetch(query);
//   const slugRoutes = slugs.map((slug) => ({
//     params: {
//       post: slug.slug,
//     },
//   }));
//   return slugRoutes;
// }

const fallbackImage: string =
  "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);
  if (!post) {
    notFound();
  }

  return {
    title: `${post.title}`,
    metadataBase: new URL(`https://sam-cux.vercel.app/blog/${post.slug}`),
    description: post.description,
    publisher: post.author.name,
    keywords: post.tags,
    alternates: {
      canonical:
        post.canonicalLink || `https://sam-cux.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      images:
        urlFor(post.coverImage?.image).width(1200).height(630).url() ||
        fallbackImage,
      url: `https://sam-cux.vercel.app/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      type: "article",
      siteName: "victoreke.com",
      authors: post.author.name,
      tags: post.tags,
      publishedTime: post._createdAt,
      modifiedTime: post._updatedAt || "",
    },
    twitter: {
      title: post.title,
      description: post.description,
      images:
        urlFor(post.coverImage?.image).width(680).height(340).url() ||
        fallbackImage,
      creator: `@${post.author.twitterUrl.split("twitter.com/")[1]}`,
      site: `@${post.author.twitterUrl.split("twitter.com/")[1]}`,
      card: "summary_large_image",
    },
  };
}

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post: PostType = await getSinglePost(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="px-6 mx-auto max-w-7xl md:px-16">
      <header>
        <Slide className="relative flex items-center pb-8 border-b gap-x-2 dark:border-zinc-800 border-zinc-200">
          <Link
            href="/blog"
            className="text-sm border-b whitespace-nowrap dark:text-zinc-400 text-zinc-400 hover:dark:text-white hover:text-zinc-700 dark:border-zinc-700 border-zinc-200"
          >
            cd ..
          </Link>
          <BiChevronRight />
          <p className="text-sm truncate text-zinc-400">{post.title}</p>
        </Slide>
      </header>

      <article>
        <Slide className="relative flex flex-col lg:flex-row" delay={0.1}>
          <div className="min-h-full px-0 pt-10 pb-4 border-r-0 lg:border-r dark:border-zinc-800 border-zinc-200 basis-3/4 lg:pr-6">
            <div className="flex items-center mb-8 gap-x-4 text-md dark:text-zinc-400 text-zinc-600">
              <div className="flex items-center gap-x-2">
                <BiCalendar />
                <time dateTime={post.date ? post.date : post._createdAt}>
                  {post.date
                    ? formatDate(post.date)
                    : formatDate(post._createdAt)}
                </time>
              </div>
              {/* <div className="flex items-center gap-x-2">
                <BiTime />
                <div className="">5 min</div>
              </div> */}
            </div>
            <h1 className="font-incognito font-semibold tracking-tight sm:text-[2.5rem] lg:leading-none leading-tight text-3xl mb-4">
              {post.title}
            </h1>
            <p className="max-w-2xl dark:text-zinc-400 text-zinc-600">
              {post.description}
            </p>
            <div className="relative w-full h-40 pt-[52.5%] mt-12">
              <Image
                className="object-cover border rounded-xl dark:border-zinc-800 border-zinc-100"
                layout="fill"
                src={post.coverImage?.image || fallbackImage}
                alt={post.coverImage?.alt || post.title}
                quality={100}
                placeholder={post.coverImage?.lqip ? `blur` : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
              />
            </div>

            <div className="mt-8 text-lg leading-relaxed tracking-tight dark:text-zinc-400 text-zinc-600">
              <PortableText value={post.body} components={CustomPortableText} />
            </div>
          </div>

          <aside className="sticky right-0 bottom-auto flex flex-col px-0 py-10 lg:max-h-full h-max gap-y-8 top-2 basis-1/4 lg:px-6">
            <section className="pb-10 border-b dark:border-zinc-800 border-zinc-200">
              <p className="text-sm dark:text-zinc-400 text-zinc-500">
                Written By
              </p>
              <address className="flex items-center mt-4 not-italic gap-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={urlFor(post.author.photo.image)
                      .width(80)
                      .height(80)
                      .url()}
                    alt={post.author.photo.alt}
                    layout="fill"
                    className="object-cover rounded-full dark:bg-zinc-800 bg-zinc-300"
                  />
                </div>
                <div rel="author">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {post.author.name}
                  </h3>
                  <a
                    href={post.author.twitterUrl}
                    className="text-sm text-blue-500"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {`@${post.author.twitterUrl.split("twitter.com/")[1]}`}
                  </a>
                </div>
              </address>
            </section>

            <section className="pb-10 border-b dark:border-zinc-800 border-zinc-200">
              <h3 className="mb-4 text-xl font-semibold tracking-tight">
                Tags
              </h3>
              <ul className="flex flex-wrap items-center gap-2 tracking-tight">
                {post.tags.map((tag, id) => (
                  <li
                    key={id}
                    className="px-2 py-1 text-sm border rounded-md dark:bg-primary-bg bg-zinc-100 dark:border-zinc-800 border-zinc-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            <SharePost
              title={post.title}
              slug={post.slug}
              description={post.description}
            />

            <section className="pb-10 border-b dark:border-zinc-800 border-zinc-200">
              <h3 className="mb-4 text-xl font-semibold tracking-tight">
                Featured
              </h3>
              <FeaturedPosts params={params.post} />
            </section>
          </aside>
        </Slide>
      </article>

      <section className="max-w-3xl pt-0 my-10 lg:border-t dark:border-zinc-800 border-zinc-200 lg:pt-16">
        <Buymeacoffee />
      </section>

      <footer className="mt-8 md:px-0">Newsletter Coming Soon...</footer>
    </main>
  );
}
