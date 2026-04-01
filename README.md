# Liu Lab Website

This repository contains the official website for the **Liu Lab**.

The site highlights the lab’s research and includes sections for **Projects**, **News**, **Publications**, and **People**, with dedicated pages for expanded **News** and **Publications** timelines.

## Contact

- Email: `drjieliu@umich.edu`
- Address: Palmer Commons 2035D, Ann Arbor, MI 48109

## Socials

The website includes links for:

- Google Scholar
- GitHub
- Email
- CV

## Updating site content

Most copy and lists live under `src/data/` (edit the relevant file, then rebuild or refresh locally):

| What to change | File |
|----------------|------|
| News timeline | `src/data/news.js` |
| Publications list | `src/data/publications.js` |
| People (current, alumni, outreach placeholders) | `src/data/people.js` |
| Project cards and detail metadata | `src/data/projects.js` |
| Header nav labels and order | `src/data/nav.js` |
| Social icon paths | `src/data/socialUrls.js` |
| Per-person Scholar / GitHub / email / CV links | `src/data/personLinks.js` |

Static files (images, PDFs) go in `public/`; URLs are built with `src/lib/assetUrl.js` so paths work on different deploy bases. CV PDFs can live under `public/Cv/`. **Project** thumbnails and hero art live under `public/ProjectImages/`; reference them with `projectImage('filename')` from `src/lib/assetUrl.js`. **News** card images can go under `public/newsImages/` and use `newsImage('filename')` from the same module.
