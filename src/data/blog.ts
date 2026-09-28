import { images } from "./images";
import { legacyContent } from "./legacyContent";

const articleImageByTopic: Record<string, string> = {
  schody: images.services.stairs.src,
  podlog: images.services.floors.src,
  jodel: images.services.floors.src,
  drzwi: images.services.doors.src,
  meble: images.services.furniture.src,
  tarcica: images.services.timber.src,
  oblog: images.services.veneer.src,
};

function firstParagraph(path: string, fallback: string) {
  const record = legacyContent.find((item) => item.path === path);
  const paragraph = record?.blocks.find((block) => block.type === "paragraph");
  return paragraph?.type === "paragraph" ? paragraph.text : fallback;
}

function imageFor(path: string) {
  const key = Object.keys(articleImageByTopic).find((topic) => path.includes(topic));
  return key ? articleImageByTopic[key] : images.article.src;
}

export const blogPosts = legacyContent
  .filter((item) => item.kind === "post")
  .map((record) => ({
    ...record,
    category: "Blog",
    excerpt: record.description || firstParagraph(record.path, record.title),
    image: {
      src: imageFor(record.path),
      alt: `${record.title} - artykuł Stolarnia Paw`,
      width: images.article.width,
      height: images.article.height,
    },
  }))
  .sort((a, b) => new Date(b.modified || b.date).getTime() - new Date(a.modified || a.date).getTime());

export function findBlogPostByPath(path: string) {
  return blogPosts.find((post) => post.path === path);
}
