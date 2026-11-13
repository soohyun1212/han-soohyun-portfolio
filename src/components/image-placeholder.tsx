export function ImagePlaceholder({ label, portrait = false }: { label: string; portrait?: boolean }) {
  return <div className={`image-placeholder ${portrait ? 'image-placeholder-portrait' : ''}`} role="img" aria-label={label}/>;
}
