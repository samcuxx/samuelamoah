import Image from "next/image";
import sanitylogo from "@/public/sanity.png";
import vercellogo from "@/public/vercel.svg";
import nextjslogo from "@/public/nextjs.svg";
import UnmountStudio from "./Unmount";
import Link from "next/link";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
        <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto max-w-7xl lg:flex-row lg:justify-between gap-y-4 md:px-16">
          <div className="flex flex-col items-center md:flex-row gap-x-2">
            <h3 className="font-inter">Built with:</h3>
            <ul className="flex items-center mt-3 text-sm gap-x-2 dark:text-zinc-600 text-zinc-400 md:mt-0">
              <li>
                <a
                  href="https://sanity.io"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={sanitylogo}
                    width={20}
                    height={20}
                    alt="sanity logo"
                  />{" "}
                  Sanity
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={nextjslogo}
                    width={20}
                    height={20}
                    alt="nextjs logo"
                  />{" "}
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={vercellogo}
                    width={20}
                    height={20}
                    alt="vercel logo"
                  />{" "}
                  Vercel
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:items-end lg:text-start">
            {/* <a
              className="flex items-center justify-center px-4 py-2 mb-3 font-bold tracking-tight text-center border border-transparent rounded-md gap-x-2 dark:bg-primary-bg bg-zinc-100 dark:hover:border-zinc-700 hover:border-zinc-200"
              href="https://github.com/Evavic44/lilyoo.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BiLogoGithub />
              Stars <em className="not-italic text-primary-color">3,329</em>
            </a> */}

            <small className="text-zinc-500">
            <Link href="/privacypolicy">Privacy Policy</Link>
            </small>
            <small className="text-zinc-500">
              Copyright &copy; Samuel Amoah {new Date().getFullYear()} All
              rights Reserved
            </small>
          </div>
        </div>
        <div className="blurb-footer"></div>
      </footer>
    </UnmountStudio>
  );
}
