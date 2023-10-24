import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import incognito from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Samuel Amoah | Software Developer",
  description:
    "Samuel Amoah is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://sam-cux.vercel.app/",
  ogImage:
    "https://res.cloudinary.com/samuelamoah/image/upload/v1697974021/Samuel%20Amoah/tg4mekbqxol1nbdzxy7l.jpg",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "https://sam-cux.vercel.app/",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  themeColor: "#33E092",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${incognito.variable} ${inter.className} dark:bg-zinc-900 bg-sa-bg-white dark:text-white text-zinc-700`}
        className={`${incognito.variable} ${inter.className} dark:bg-sa-bg-black bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        async
        src="https://analytics.eu.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ""}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5234293399921884"
     crossOrigin="anonymous"></script>
    </html>
  );
}
