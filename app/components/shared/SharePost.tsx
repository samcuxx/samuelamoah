"use client";

import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";

type props = {
  title: string;
  slug: string;
  description: string;
};

export default function SharePost({ title, slug, description }: props) {
  const blog = encodeURIComponent("https://sam-cux.vercel.app/blog/");
  const options = [
    {
      icon: BiLogoTwitter,
      name: "Twitter",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "Thank you @samuelamoah for writing this post."
      )}.%0A%0A${title}%0A%0A${blog}${slug}`,
    },
    {
      icon: BiLogoLinkedinSquare,
      name: "LinkedIn",
      shareUrl: `https://linkedin.com/sharing/share-offsite/?url=${blog}${slug}&title=${title}&summary=${description}`,
    },
    {
      icon: BiLogoFacebookSquare,
      name: "Facebook",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${blog}${slug}`,
    },
    {
      icon: BiLogoWhatsapp,
      name: "WhatsApp",
      shareUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        "Read this amazing article by Samuel Amoah"
      )}.%0A%0A${title}%0A%0A${blog}${slug}`,
    },
  ];

  const openPopup = (url: string) => {
    window.open(
      url,
      "Social Share",
      "width=600,height=600,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  return (
    <section className="pb-10 border-b dark:border-zinc-800 border-zinc-200">
      <h3 className="mb-4 text-xl font-semibold tracking-tight">Share Post</h3>

      <div className="flex flex-wrap items-center gap-2 tracking-tight">
        {options.map((data, id) => (
          <button
            key={id}
            onClick={() => openPopup(data.shareUrl)}
            title={`Share to ${data.name}`}
            aria-label={`Share to ${data.name}`}
            className="grid w-12 h-12 p-2 text-2xl border rounded-md place-content-center dark:bg-primary-bg bg-zinc-100 dark:border-zinc-800 border-zinc-200"
          >
            <data.icon aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
