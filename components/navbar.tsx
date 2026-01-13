"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-10 border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-zinc-900/60">
            <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
                <Link
                    href="/"
                    className="text-lg font-semibold text-zinc-900 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                >
                    Chai's Blog
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}
