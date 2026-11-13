/** Render metadata separators with one spacing rule, independent of source whitespace. */
export function MetadataList({ value }: { value: string }) {
  const items = value.split(/\s*·\s*/).map(item => item.trim()).filter(Boolean);
  return <span className="metadata-list">{items.map((item, index) => <span className="metadata-item" key={`${index}-${item}`}>{index > 0 && <span className="metadata-separator">·</span>}<span>{item}</span></span>)}</span>;
}
