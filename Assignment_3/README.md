# SDA101 — Assignment 3: Photo Studio

## Overview:
- Responsive static landing page for a photographer (Mike Hudson).
- Built with HTML5 and Tailwind CSS (CDN). Uses Playfair Display + Inter from Google Fonts.

## Features
- Two-column hero (text left, hero image right).
- Quote strip with decorative blob.
- Feature / collage section.
- 4-up gallery that fills the row on md+ screens.
- Testimonial: Linda image on the left, testimonial text centered on the right between left/right arrow buttons.
- Final two-panel section (agency + style) side-by-side.


## Project structure
- index.html — main page
- README.md — this file
- Assets/ — folder with images referenced by the page (e.g. feather.jpg, linda.jpg, gallery_1.jpg, agency.jpg, girl.jpg, design.JPEG, etc.)

## Notes & tips
- File names in `Assets/` are case-sensitive on some systems (macOS depending on filesystem). Ensure exact casing matches the src attributes.
- Tailwind CDN is used for rapid prototyping. For production, consider a build step to purge unused CSS.
- If any images are missing, add them to the Assets folder or update the src paths in `index.html`.

