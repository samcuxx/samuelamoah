import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Blog | Samuel Amoah",
  metadataBase: new URL("https://sam-cux.vercel.app/blog"),
  description: "Read latest stories from Samuel Amoah's Blog",
  openGraph: {
    title: "Blog | Samuel Amoah",
    url: "https://sam-cux.vercel.app/blog",
    description: "Read latest stories from Samuel Amoah's Blog",
    images:
      "https://res.cloudinary.com/samuelamoah/image/upload/v1697975302/Samuel%20Amoah/vczdsywwhyhzoduglkid.jpg",
  },
};

export default async function Blog() {
  return (
    <>
      <main className="px-6 mx-auto max-w-7xl md:px-16">
        <section className="max-w-[950px] mb-12 pb-12 border-b dark:border-zinc-800 border-zinc-100">
          <div className="max-w-2xl">
            <Slide>
              <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
                Blog
              </h1>
              <p className="mb-8 text-base leading-relaxed dark:text-zinc-400 text-zinc-600">
                Welcome to my blog domain where I share personal stories about
                things I&apos;ve learned, projects I&apos;m hacking on and just
                general findings. I also write for other publications.
              </p>

              <Social type="publication" />
            </Slide>
          </div>
        </section>

        <Slide delay={0.1}>
          <div className="flex items-center mb-8 gap-x-3">
            <BiDetail />
            <h2 className="text-xl font-semibold tracking-tight">
              Explore All
            </h2>
          </div>
          <Posts />
        </Slide>
      </main>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5234293399921884"
     crossOrigin="anonymous"></script>
    </>
  );
}
