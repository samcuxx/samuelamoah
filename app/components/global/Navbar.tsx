import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Photos",
      href: "/photos",
    },
  ];

  return (
    <UnmountStudio>
      <header className="z-30 px-6 py-6 mb-10 text-sm border-b md:px-16 dark:border-zinc-800 border-zinc-200 md:mb-28">
      <div className="blurb top-[-20%] left-[-20%]"></div>




        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/">
            <Image src={Logo} width={35} height={35} alt="logo" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="text-base duration-300 font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
