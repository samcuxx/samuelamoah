import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";

const images = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1618385772346-943ce2f53f09?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1565172265978-aaa872e3f618?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1611096002616-763f16ef15f3?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const metadata: Metadata = {
  title: "Photos | Samuel Amoah",
  metadataBase: new URL("https://sam-cux.vercel.app/photos"),
  description: "Explore photos taken by Samuel Amoah",
  openGraph: {
    title: "Photos | Samuel Amoah",
    url: "https://sam-cux.vercel.app/photos",
    description: "Explore photos taken by Samuel Amoah",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default function Photos() {
  return (
    <main className="px-6 mx-auto mt-20 max-w-7xl md:px-16 lg:mt-32">
      <div className="max-w-2xl lg:max-w-2xl">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-3 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Photos
          </h1>
          <p className="text-base leading-relaxed dark:text-zinc-400 text-zinc-600">
            This page is still under construction...
          </p>
        </Slide>
      </div>
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
