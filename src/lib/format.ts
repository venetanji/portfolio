import type { ImageMetadata } from "astro";

const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const publicationImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/publications/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

function findImage(
  map: Record<string, { default: ImageMetadata }>,
  slug: string
): ImageMetadata | null {
  for (const [path, mod] of Object.entries(map)) {
    const file = path.split("/").pop() ?? "";
    const base = file.replace(/\.[^.]+$/, "");
    if (base === slug) return mod.default;
  }
  return null;
}

export function getProjectImage(slug: string): ImageMetadata | null {
  return findImage(projectImages, slug);
}

export function getPublicationImage(slug: string): ImageMetadata | null {
  return findImage(publicationImages, slug);
}

export function fmtMonth(iso: string | undefined): string {
  if (!iso) return "Present";
  const [y, m] = iso.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const idx = Math.max(0, Math.min(11, parseInt(m ?? "1", 10) - 1));
  return `${months[idx]} ${y}`;
}

export function fmtRange(start: string, end?: string): string {
  return `${fmtMonth(start)} → ${fmtMonth(end)}`;
}

export function getYear(d: Date | undefined): string {
  if (!d) return "";
  return String(d.getFullYear());
}

export function authorList(authors?: string[]): string {
  if (!authors || authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
  return `${authors.slice(0, -1).join(", ")}, & ${authors[authors.length - 1]}`;
}
