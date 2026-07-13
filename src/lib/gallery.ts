/**
 * Site photography — generated from public/Image-Catalogue by
 * optimize-catalogue.mjs (originals gitignored; optimized WebP lives in
 * public/portfolio). Regenerate the JSON when new event folders arrive.
 */
import data from "./gallery-data.json";

export type GalleryImage = { src: string; w: number; h: number; zone: string };
export type GalleryEvent = { slug: string; name: string; images: GalleryImage[] };

export const galleryEvents = data as GalleryEvent[];

export function eventCover(slug: string, index = 0): GalleryImage | undefined {
  return galleryEvents.find((e) => e.slug === slug)?.images[index];
}
