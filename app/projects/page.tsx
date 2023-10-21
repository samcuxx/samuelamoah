import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import ProjectList from "../components/shared/Project";
export const metadata: Metadata = {
  title: "Project | Samuel Amoah",
  metadataBase: new URL("https://sam-cux.vercel.app/projects"),
  description: "Explore projects built by Samuel Amoah",
  openGraph: {
    title: "Projects | Samuel Amoah",
    url: "https://sam-cux.vercel.app/projects",
    description: "Explore projects built by Samuel Amoah",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
  },
};

export default async function Project() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-2xl mb-16">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Projects
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas on how it can be
            improved.
          </p>
        </Slide>
      </header>
      <ProjectList />
    </main>
  );
}
