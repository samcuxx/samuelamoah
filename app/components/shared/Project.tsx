import { Slide } from '@/app/animation/Slide'
import { getProjects } from '@/lib/sanity.query';
import { ProjectType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import EmptyState from './EmptyState';

const ProjectList = async () => {
  const projects: ProjectType[] = await getProjects();

  return (
    <Slide delay={0.1}>
    {projects.length > 0 ? (
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
          >
            <Image
              src={project.logo}
              width={60}
              height={60}
              alt={project.name}
              className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
            />
            <div>
              <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
              <div className="text-sm dark:text-zinc-400 text-zinc-600">
                {project.tagline}
              </div>
            </div>
          </Link>
        ))}
      </section>
    ) : (
      <EmptyState value="Projects" />
    )}
  </Slide>
  )
}

export default ProjectList