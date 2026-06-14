# Personal Website

Built for GitHub Pages — static HTML/CSS/JS, no build step required.

## Structure

```
.
├── index.html          # Home page
├── blog/
│   ├── index.html      # Blog index
│   └── blog.css        # Blog styles
├── posts/
│   ├── allpass-reverb-daisy.html   # Sample post
│   └── post.css                    # Post reading styles
├── css/
│   ├── tokens.css      # Design tokens (colors, typography, spacing)
│   └── base.css        # Reset, layout, nav, footer, buttons
└── js/
    └── main.js         # Theme toggle, scroll header, mobile nav
```

## Deployment

Push to a GitHub repo and enable GitHub Pages from Settings → Pages → Deploy from branch (main, root).

The site will be live at `https://<yourusername>.github.io` (for a user site) or `https://<yourusername>.github.io/<repo-name>` for a project site.

## Adding a new post

1. Copy `posts/allpass-reverb-daisy.html` to a new file in `posts/`
2. Update the title, meta description, tags, date, and body content
3. Add a card for it in `blog/index.html` with the correct `data-category` attribute
4. Add it to the "Latest posts" section in `index.html` if it's recent

## Customization

- Update your name/username/GitHub URL throughout (search for `yourusername`)
- Update `the.sassan@gmail.com` if you want a different contact email
- All colors are in `css/tokens.css` — change `--color-primary` to shift the accent color
- Fonts are loaded via Google Fonts + Fontshare CDN in each HTML file's `<head>`
