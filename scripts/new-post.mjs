import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run post -- "文章标题"');
  process.exit(1);
}

const now = new Date();
const date = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(now);

const slug = toSlug(title);
const postsDir = join(process.cwd(), "src", "content", "blog");
mkdirSync(postsDir, { recursive: true });

let filename = `${date}-${slug}.md`;
let filepath = join(postsDir, filename);
let index = 2;

while (existsSync(filepath)) {
  filename = `${date}-${slug}-${index}.md`;
  filepath = join(postsDir, filename);
  index += 1;
}

const content = `---
title: "${escapeYaml(title)}"
description: "TODO: 用一句话概括这篇文章。"
pubDate: ${date}
tags: ["TODO"]
draft: true
---

## 背景

TODO: 这篇文章要解决什么问题？

## 过程

TODO: 记录关键步骤、代码、参数或踩坑。

## 结论

TODO: 写下可以复用的结论。
`;

writeFileSync(filepath, content, "utf8");

console.log(`Created ${filepath}`);
console.log("Edit it, then change draft: true to draft: false when ready.");

function toSlug(input) {
  const normalized = input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "post";
}

function escapeYaml(input) {
  return input.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
