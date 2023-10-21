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
            <h2 className="mb-4 text-4xl font-bold tracking-tight font-incognito">
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
            <h2 className="mb-4 text-4xl font-bold tracking-tight font-incognito">
              My Featured Posts
            </h2>
          </div>
        </Slide>
        <Slide delay={0.18} className="gap-5 md:flex">
          <FeaturedPosts />
        </Slide>
        <Heroes />
        <div className="blurb-1 bottom-[-80%] left-[10%]"></div>
      </section>
    </>
  );
};

export default HomeAddons;
