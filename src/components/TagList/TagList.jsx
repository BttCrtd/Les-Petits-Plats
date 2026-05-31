import { Tag } from "@/components/Tag/Tag";

export function TagList({
  selectedTag,
  category,
  removeSelectedTag,
}) {
  return (
    <div>
      {selectedTag[category].map((item, index) => (
        <Tag
          key={`${category}-${index}`}
          name={item}
          onClick={() =>
            removeSelectedTag(category, item)
          }
        />
      ))}
    </div>
  );
}