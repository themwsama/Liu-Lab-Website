import { assetUrl } from '../lib/assetUrl.js'

/**
 * External links for people (keys match `name` in `people.js` and Home About).
 * Fields are optional; omit or set to `null` to show an inactive placeholder on the People page.
 *
 * - `googleScholar` — full URL to Google Scholar profile
 * - `github` — lab or personal GitHub URL
 * - `email` — use `mailto:address@example.com`
 * - `cv` — path under `public/` (PDF); use `assetUrl('Cv', 'file.pdf')` for files with spaces
 */
export const PERSON_LINKS = {
  'Jie Liu': {
    googleScholar:
      'https://scholar.google.com/citations?user=h6EgPkEAAAAJ&hl=en',
    github: 'https://github.com/liu-bioinfo-lab',
    email: 'mailto:drjieliu@umich.edu',
    cv: assetUrl('Cv', 'CV_liu.pdf'),
  },
}

/** @returns {typeof PERSON_LINKS[string] | null} */
export function getPersonLinks(name) {
  return PERSON_LINKS[name] ?? null
}
