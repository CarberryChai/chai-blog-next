"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-10 rounded-full border border-zinc-200/50 bg-white/60 p-3 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-opacity hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:hover:bg-zinc-900/80"
            aria-label="返回顶部"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-zinc-700 dark:text-zinc-300"
            >
                <path d="m18 15-6-6-6 6" />
            </svg>
        </button>
    );
}
