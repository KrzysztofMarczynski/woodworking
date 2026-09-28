import type { LegacyBlock } from "../types/content";

export default function LegacyBlocks({ blocks }: { blocks: LegacyBlock[] }) {
  return (
    <div className="legacy-prose">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = block.level >= 3 ? "h3" : "h2";
          return <Tag key={`${block.text}-${index}`}>{block.text}</Tag>;
        }
        if (block.type === "list") {
          return <ul key={`list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        }
        return <p key={`${block.text.slice(0, 30)}-${index}`}>{block.text}</p>;
      })}
    </div>
  );
}

