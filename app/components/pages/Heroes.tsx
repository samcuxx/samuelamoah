import { getHeroes } from "@/lib/sanity.query";
import { HeroeType } from "@/types";
import EasterEgg from "../shared/EasterEgg";
import { Slide } from "../../animation/Slide";

export default async function Heroes() {
  const heroes: HeroeType[] = await getHeroes();

  return (
    <section className="max-w-5xl mt-32">
      <Slide delay={0.17}>
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Heroes</h2>
        <p className="max-w-2xl dark:text-zinc-400 text-zinc-600">
          Inspired by{" "}
          <a
            href="https://rafa.design"
            rel="noreferrer noopener"
            target="_blank"
            className="text-blue-500 dark:text-blue-400"
          >
            Rafael Conde&apos;s
          </a>{" "}
          heroes list, here&apos;s my own curated lineup of code conjurers and
          digital dynamos that I&apos;m absolutely stoked to meet someday.{" "}
          <strong className="font-semibold">
            &quot;In no particular order&quot;
          </strong>
        </p>
      </Slide>

      <ul className="grid grid-cols-1 gap-6 mt-12 tracking-tight lg:grid-cols-4 md:grid-cols-2">
        {heroes.map((heroe) => (
          <li
            key={heroe._id}
            className="flex items-center px-2 py-1 border rounded-md gap-x-2 dark:bg-primary-bg bg-zinc-100 dark:border-zinc-800 border-zinc-200"
          >
            <EasterEgg isMet={heroe.met} />
            <a
              href={heroe.url}
              rel="noreferrer noopener"
              target="_blank"
              className={`font-incognito tracking-wide hover:underline ${
                heroe.met ? "dark:text-green-300 text-green-800" : null
              }`}
            >
              {heroe.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
