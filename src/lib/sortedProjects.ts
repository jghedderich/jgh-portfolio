import type { CollectionEntry } from 'astro:content';

/** Sort by `order` descending (higher first), then title */
export function sortedProjects(
  entries: CollectionEntry<'projects'>[],
): CollectionEntry<'projects'>[] {
  return [...entries].sort((a, b) => {
    const ao = a.data.order ?? 0;
    const bo = b.data.order ?? 0;
    if (ao !== bo) return bo - ao;
    return a.data.title.localeCompare(b.data.title);
  });
}
