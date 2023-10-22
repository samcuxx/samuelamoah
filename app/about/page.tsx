import Image from "next/image";
import { Metadata } from "next";
import { getProfile } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Heroes from "../components/pages/Heroes";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "About | Samuel Amoah",
  metadataBase: new URL("https://sam-cux.vercel.app/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Samuel Amoah",
    url: "https://sam-cux.vercel.app/about",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://res.cloudinary.com/samuelamoah/image/upload/v1697974021/Samuel%20Amoah/tg4mekbqxol1nbdzxy7l.jpg",
  },
};

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="relative max-w-3xl px-6 mx-auto lg:max-w-7xl md:px-16">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="relative grid grid-cols-1 lg:grid-cols-custom gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <Slide>
                  <h1 className="mb-8 text-3xl font-black tracking-tight font-incognito sm:text-5xl lg:leading-tight basis-1/2">
                    I&apos;m {data.fullName}. I live in {data.location}, where I
                    build the future.
                  </h1>

                  <div className="leading-relaxed dark:text-zinc-400 text-zinc-600">
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </Slide>
              </div>

              <aside className="flex flex-col order-none mb-12 lg:justify-self-center justify-self-start gap-y-8 lg:order-1">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="object-cover mb-4 bg-top rounded-2xl max-h-96 min-h-96"
                      src={data.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={data.profileImage.alt}
                      placeholder="blur"
                      blurDataURL={data.profileImage.lqip}
                      priority
                    />

                    <div className="flex flex-col text-center gap-y-4">
                      <div className="flex items-center gap-x-3">
                        <a
                          href="https://www.craft.me/s/WQpQF3jrPIodXp"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                        >
                          View Résumé <BiLinkExternal className="text-base" />
                        </a>
                        <a
                          href={`${data.resumeURL}?dl=${data.fullName}-resume`}
                          className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                          title="Download Resume"
                        >
                          <BiSolidDownload
                            className="text-lg"
                            aria-label="Download Resume"
                          />
                        </a>
                      </div>

                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 hover:text-primary-color"
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </a>
                    </div>
                  </div>
                </Slide>
              </aside>
            </section>
            <Slide delay={0.14}>
              <Usage />
            </Slide>
            <Heroes />
          </div>
        ))}
    </main>
  );
}
