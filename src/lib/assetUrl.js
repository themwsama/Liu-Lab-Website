/**
 * Build a URL for files in `public/`, respecting Vite `import.meta.env.BASE_URL`.
 * Each path segment is encoded so filenames with spaces work when deployed.
 */
export function assetUrl(...segments) {
  const base = import.meta.env.BASE_URL
  if (segments.length === 0) return base
  return base + segments.map((s) => encodeURIComponent(s)).join('/')
}

export function peoplePictureUrl(filename) {
  return assetUrl('PeoplePictures', filename)
}

/** Project card / detail art under `public/ProjectImages/`. */
export function projectImage(filename) {
  return assetUrl('ProjectImages', filename)
}

/** Thumbnails for news cards under `public/newsImages/`. */
export function newsImage(filename) {
  return assetUrl('newsImages', filename)
}

/** Publication card art under `public/publicationimg/`. */
export function publicationImage(filename) {
  return assetUrl('publicationimg', filename)
}
