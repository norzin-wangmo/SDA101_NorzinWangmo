# Assignment 3 — Reflection

Course: SDA101  
Project: Photo Studio landing page

## Summary
This assignment delivered a responsive static landing page for a photographer (Mike Hudson). The page includes: hero section, gallery, testimonial (Linda), and two-panel agency/style section.


## Tools & Technologies
- HTML5
- Tailwind CSS (CDN)
- Google Fonts (Playfair Display, Inter)
- macOS (development environment)

## What I learned
- How to structure responsive grids with Tailwind (grid-cols / md:grid-cols).
- Positioning overlays and absolute elements (image captions, overlay blobs).
- Using utility classes to quickly prototype layout and spacing.
- Debugging common issues: misplaced closing tags, incorrect image paths and case-sensitivity on macOS.

## Challenges & Solutions
- Broken layout due to misplaced closing tags — fixed by ensuring image and overlay live inside the same container.
- Images not appearing initially — verified file names and corrected paths (case matters on some systems).
- Testimonial layout: placing arrows so they flank the content required using a two-column grid with absolutely positioned arrow buttons inside the right column.

## Key files
- `index.html` — main page markup
- `Assets/` — images used in the page
