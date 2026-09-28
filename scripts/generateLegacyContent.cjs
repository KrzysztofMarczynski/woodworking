const fs = require("fs");
const path = require("path");

const root = process.cwd();
const pages = JSON.parse(fs.readFileSync(path.join(root, ".crawl", "wp-pages.json"), "utf8"));
const posts = JSON.parse(fs.readFileSync(path.join(root, ".crawl", "wp-posts.json"), "utf8"));

const entityMap = {
  amp: "&",
  nbsp: " ",
  hellip: "...",
  ndash: "-",
  mdash: "-",
  rsquo: "'",
  lsquo: "'",
  rdquo: '"',
  ldquo: '"',
  quot: '"',
};

function decodeEntities(value) {
  return String(value || "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&([a-zA-Z]+);/g, (_, name) => entityMap[name] || "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(value) {
  return decodeEntities(String(value || "").replace(/<[^>]*>/g, " "));
}

function pathFromLink(link) {
  const url = new URL(link);
  return url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
}

function blocksFromHtml(html) {
  const blocks = [];
  const blockPattern = /<(h2|h3|p|li)[^>]*>([\s\S]*?)<\/\1>/gi;

  for (const match of html.matchAll(blockPattern)) {
    const tag = match[1].toLowerCase();
    const text = stripTags(match[2]);

    if (!text || text === "Czytaj więcej") continue;
    if (/^(image|obraz)$/i.test(text)) continue;

    if (tag === "h2" || tag === "h3") {
      blocks.push({ type: "heading", level: Number(tag.slice(1)), text });
      continue;
    }

    if (tag === "li") {
      const previous = blocks[blocks.length - 1];
      if (previous && previous.type === "list") previous.items.push(text);
      else blocks.push({ type: "list", items: [text] });
      continue;
    }

    blocks.push({ type: "paragraph", text });
  }

  const seen = new Set();
  return blocks.filter((block) => {
    const key = JSON.stringify(block);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function headingsFromBlocks(blocks) {
  return blocks
    .filter((block) => block.type === "heading")
    .map((block) => ({ level: block.level, text: block.text }));
}

function normalizeItem(item, kind) {
  const blocks = blocksFromHtml(item.content?.rendered || "");
  const yoast = item.yoast_head_json || {};
  return {
    kind,
    path: pathFromLink(item.link),
    title: stripTags(item.title?.rendered || yoast.title || ""),
    seoTitle: stripTags(yoast.title || item.title?.rendered || ""),
    description: stripTags(yoast.description || item.excerpt?.rendered || ""),
    date: item.date || "",
    modified: item.modified || "",
    headings: headingsFromBlocks(blocks),
    blocks,
  };
}

const records = [
  ...pages.map((item) => normalizeItem(item, "page")),
  ...posts.map((item) => normalizeItem(item, "post")),
];

const output = `/* Generated from .crawl WordPress REST data. Do not edit by hand. */
import type { LegacyContentRecord } from "../types/content";

export const legacyContent = ${JSON.stringify(records, null, 2)} satisfies LegacyContentRecord[];
`;

fs.writeFileSync(path.join(root, "src", "data", "legacyContent.ts"), output, "utf8");
console.log(`Generated ${records.length} legacy content records.`);
