import { Slide } from "@/app/animation/Slide";
import React from "react";
import ProjectList from "../shared/Project";
import FeaturedPosts from "../pages/FeaturedPosts";
import Heroes from "../pages/Heroes";

const HomeAddons = () => {
  return (
    <>
      <section className="mt-32">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              My Projects
            </h2>
          </div>
        </Slide>
        <Slide delay={0.18}>
          <ProjectList />
        </Slide>
      </section>
      <section className="mt-32">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              My Featured Posts
            </h2>
          </div>
        </Slide>
        <Slide delay={0.18} className="flex gap-5">
          <FeaturedPosts />
        </Slide>
        <Heroes />
        <div className="blurb-1 bottom-[-80%] left-[10%]"></div>
      </section>
    </>
  );
};

export default HomeAddons;
