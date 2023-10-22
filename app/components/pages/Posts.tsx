import Image from "next/legacy/image";
import Link from "next/link";
import { getPosts } from "@/lib/sanity.query";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiCalendar, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";

const fallbackImage: string =
  "https://res.cloudinary.com/samuelamoah/image/upload/v1697975302/Samuel%20Amoah/vczdsywwhyhzoduglkid.jpg";

export default async function Posts() {
  const posts: PostType[] = await getPosts();

  return (
    <section>
      {posts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {posts.map((post) =>
            post.isPublished !== true ? null : (
              <article key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col items-start gap-8 p-6 border rounded-lg lg:flex-row lg:items-center dark:bg-primary-bg bg-secondary-bg dark:border-zinc-800 border-zinc-200 group"
                >
                  <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip">
                    <Image
                      src={post.coverImage?.image || fallbackImage}
                      className="object-cover duration-300 rounded-md dark:bg-zinc-800 bg-zinc-100 group-hover:scale-125"
                      alt={post.coverImage?.alt || post.title}
                      layout="fill"
                      placeholder={post.coverImage ? "blur" : "empty"}
                      blurDataURL={post.coverImage?.lqip || ""}
                    />
                  </div>
                  <div className="max-w-lg">
                    <h2 className="max-w-sm mb-4 text-2xl font-semibold tracking-tight">
                      {post.title}
                    </h2>
                    <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
                      {post.description}
                    </p>
                    <div className="flex items-center mt-3 text-sm gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <BiCalendar />
                        <time
                          dateTime={post.date ? post.date : post._createdAt}
                        >
                          {post.date
                            ? formatDate(post.date)
                            : formatDate(post._createdAt)}
                        </time>
                      </div>
                      {/* <div className="flex items-center gap-x-2">
                        <BiTime />
                        <p className="">5 min</p>
                      </div> */}
                    </div>
                  </div>
                </Link>
              </article>
            )
          )}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
