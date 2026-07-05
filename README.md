# One-and-Done2022.github.io

Chenyang Liu 的个人主页与技术博客，基于 Astro 构建并通过 GitHub Pages 发布。

## 本地开发

```bash
npm install
npm run dev
```

## 写新文章

```bash
npm run post -- "文章标题"
```

命令会在 `src/content/blog/` 下生成一篇草稿。写完后把文件头部的 `draft: true` 改成 `draft: false`，再提交推送。

## 构建检查

```bash
npm run build
```

## 发布

将仓库推送到 `One-and-Done2022.github.io` 后，在 GitHub 仓库设置中将 Pages 的发布源设为 GitHub Actions。
