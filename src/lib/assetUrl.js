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
