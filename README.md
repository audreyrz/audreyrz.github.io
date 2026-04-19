# Personal Portfolio — yourname.github.io

A dark-mode personal website with aurora borealis / astrophotography aesthetics, built in pure HTML, CSS, and vanilla JS. Zero frameworks, zero build step.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, About, Experience, Projects, Contact |
| Photography | `pages/photography.html` | Masonry gallery with lightbox and category filter |
| Blog | `pages/blog.html` | Post list with sidebar |

## Deploying to GitHub Pages

1. Create a repo named `<yourusername>.github.io`
2. Push all files to the `main` branch
3. Go to **Settings → Pages** and set Source to **Deploy from branch → main → / (root)**
4. Your site will be live at `https://<yourusername>.github.io` within ~60 seconds

## Customisation Checklist

- [ ] Replace every instance of `Your Name` with your actual name
- [ ] Replace `yourusername` with your GitHub username
- [ ] Replace `yourhandle` with your Instagram handle
- [ ] Update `you@email.com` with your real email
- [ ] Replace the nav logo `YN✦` initials
- [ ] Update the bio text and skills list
- [ ] Add your actual projects (title, description, tags, links)
- [ ] Swap in real experience entries
- [ ] Upload real photos to `images/` and reference them in `photography.html`
- [ ] Write real blog posts (or link to external platform)
- [ ] Update the stat cards (years, projects, etc.)

## Adding Real Photos

In `pages/photography.html`, replace each `.masonry-photo` div's placeholder content with:

```html
<img src="../images/your-photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;">
```

## Structure

```
yourname.github.io/
├── index.html          ← Home page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Aurora, cursor, animations
├── pages/
│   ├── photography.html
│   └── blog.html
├── images/             ← Add your photos here
└── _config.yml         ← GitHub Pages config
```

## Tech

- **Fonts**: Syne (display) · DM Mono (body) · Instrument Serif (italic accents) via Google Fonts
- **Animation**: WebGL-free aurora via Canvas 2D API
- **Cursor**: Custom SVG cursor with smooth ring follow
- **Scroll animations**: IntersectionObserver
- **No dependencies** — ships zero npm packages
