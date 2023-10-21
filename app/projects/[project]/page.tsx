import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import client from "@/lib/sanity.client";

type Props = {
  params: {
    project: string;
  };
};
// TODO: Fix this
export async function generateStaticParams() {
  const query = `*[_type == "project"]
  {
    slug
  }`;
  const slugs: ProjectType[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => ({
    params: {
      project: slug.slug,
    },
  }));
  return slugRoutes;
}

const fallbackImage: string =
  "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(
      `https://sam-cux.vercel.app/projects/${project.slug}`
    ),
    description: project.tagline,
    openGraph: {
      images:
        urlFor(project.coverImage?.image).width(1200).height(630).url() ||
        fallbackImage,
      url: `https://sam-cux.vercel.app/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl px-8 mx-auto lg:px-16">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <h1 className="max-w-sm mb-4 text-3xl font-black tracking-tight font-incognito sm:text-5xl">
              {project.name}
            </h1>

            <a
              href={project.projectUrl}
              rel="noreferrer noopener"
              target="_blank"
              className={`dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 ${
                !project.projectUrl
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-pointer hover:border-zinc-700"
              }`}
            >
              {project.projectUrl ? "Explore" : "Coming Soon"}
            </a>
          </div>

          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="object-cover border rounded-xl dark:border-zinc-800 border-zinc-100"
              layout="fill"
              src={project.coverImage?.image || fallbackImage}
              alt={project.coverImage?.alt || project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-8 leading-relaxed dark:text-zinc-400 text-zinc-600">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
