---
title: "Hello World"
date: "2026-01-13"
description: "这是我的第一篇博客文章，欢迎来到我的个人博客！"
---

## 欢迎

这是我的个人博客，我会在这里分享一些技术文章和生活感悟。

## 代码示例

下面是一段 TypeScript 代码：

```typescript
interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

async function getAllPosts(): Promise<Post[]> {
  // 获取所有文章
  const posts = await fetchPosts();
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
```

## 结语

感谢阅读！
