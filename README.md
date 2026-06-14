# k-wheeler.github.io

Personal academic website for **Kathryn I. Wheeler**, Environmental & Geospatial Data Scientist.

Live at: [k-wheeler.github.io](https://k-wheeler.github.io)

## Stack

Plain HTML + [Tailwind CSS](https://tailwindcss.com/) (CDN). No build step — GitHub Pages serves the files directly.

## Pages

| File | URL |
|------|-----|
| `index.html` | About |
| `resume.html` | Resume |
| `research.html` | Previous Research |
| `publications.html` | Publications |
| `news.html` | News |
| `cv.html` | CV (not in nav, accessible directly) |

## Assets

- `images/profile_professional.jpg` — profile photo (replace to update)
- `files/KathrynWheeler_Resume.pdf` — resume PDF
- `files/KathrynWheeler_CV.pdf` — CV PDF

## Running locally

```bash
python3 -m http.server 8765
```

Then open [http://localhost:8765](http://localhost:8765).

## Adding a news item

Open `news.html` and copy one of the `<article>` blocks inside the timeline. Paste it above the most recent item and update the date, icon, badge, and description. The HTML comment in the file explains the badge color options.

## Updating publications

Open `publications.html` and add a new `<article>` card at the top of the list. Follow the same structure as the existing cards.
