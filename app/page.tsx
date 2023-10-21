import { getProfile } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import HomeAddons from "./components/home/HomeAddons";
import SVGContainer from "./icons/SAHero";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="px-6 mx-auto mt-20 max-w-7xl md:px-16 lg:mt-32">
      {/* <SVGContainer viewBox="0 0 800 600"/> */}
      <section className="flex flex-col items-start justify-between mb-16 xl:flex-row xl:items-center xl:justify-center gap-x-12">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="max-w-2xl lg:max-w-2xl">
              <Slide>
                <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base leading-relaxed dark:text-zinc-400 text-zinc-600">
                  {data.shortBio}
                </p>
              </Slide>
              <Slide delay={0.1}>
                <Social type="social" />
              </Slide>
            </div>
          ))}
        <Slide delay={0.14}>
          {/* <HeroSvg /> */}
      <SVGContainer viewBox="0 0 800 600"/>

        </Slide>
        <div className="blurb-1 bottom-[-20%] right-[10%]"></div>
      </section>
      <Job />
      <HomeAddons/>
    </main>
  );
}
