import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: "文章未找到" };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-dvh bg-gradient-to-br from-zinc-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
            <Navbar />
            <main className="mx-auto max-w-2xl px-6 py-12">
                <article className="rounded-xl border border-zinc-200 bg-white/80 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                    <header className="mb-8 border-b border-zinc-200 pb-8 dark:border-white/10">
                        <time className="text-sm tabular-nums text-zinc-500">
                            {post.date}
                        </time>
                        <h1 className="mt-2 text-balance text-3xl font-bold text-zinc-900 dark:text-white">
                            {post.title}
                        </h1>
                        <p className="mt-2 text-pretty text-zinc-600 dark:text-zinc-400">{post.description}</p>
                    </header>

                    <div
                        className="prose-blog"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                </article>
            </main>
        </div>
    );
}
