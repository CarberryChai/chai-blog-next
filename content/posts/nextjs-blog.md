---
title: "使用 Next.js 构建博客"
date: "2026-01-12"
description: "介绍如何使用 Next.js 和 Markdown 构建一个简单的个人博客。"
---

## 为什么选择 Next.js？

Next.js 是一个强大的 React 框架，提供了：

- **服务端渲染 (SSR)**
- **静态生成 (SSG)**
- **App Router**
- **内置优化**

## 技术栈

本博客使用的技术栈：

```javascript
const techStack = {
  framework: "Next.js 16",
  styling: "Tailwind CSS 4",
  content: "Markdown + gray-matter",
  highlighting: "Shiki",
  deployment: "Cloudflare Pages"
};
```

## 部署到 Cloudflare

使用 `opennextjs-cloudflare` 可以轻松将 Next.js 应用部署到 Cloudflare：

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare deploy
```

就是这么简单！
