import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-dvh bg-gradient-to-br from-zinc-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <header className="mb-8">
          <p className="text-pretty text-zinc-600 dark:text-zinc-400">
            技术笔记与生活随想
          </p>
        </header>

        <section className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="block">
              <article className="rounded-xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-sm transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                <time className="text-sm tabular-nums text-zinc-500">
                  {post.date}
                </time>
                <h2 className="mt-1 text-balance text-xl font-semibold text-zinc-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-pretty text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </section>

        {posts.length === 0 && (
          <div className="rounded-xl border border-zinc-200 bg-white/80 p-8 text-center backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-zinc-600 dark:text-zinc-400">暂无文章</p>
          </div>
        )}
      </main>
    </div>
  );
}


