import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@shikijs/rehype";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
}

export interface Post extends PostMeta {
    contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .filter((name) => name.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                description: data.description,
            };
        });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeShiki, {
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
        })
        .use(rehypeStringify)
        .process(content);

    return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        contentHtml: processedContent.toString(),
    };
}

export function getAllPostSlugs(): string[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        .filter((name) => name.endsWith(".md"))
        .map((name) => name.replace(/\.md$/, ""));
}
