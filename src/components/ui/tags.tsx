interface TagsProps {
  items: string[];
}

export function Tags({ items }: TagsProps) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}
