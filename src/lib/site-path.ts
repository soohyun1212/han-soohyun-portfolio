const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix public assets and native anchors; Next Link handles its own basePath. */
export function withBasePath(path: string): string {
  if (!basePath || !path.startsWith('/') || path.startsWith('//')) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}
