# SIGN MOTION — GitHub Pages demo (parallax edition)

Static website: `index.html`, `style.css`, `script.js`. No build process.

## Publish
1. Create a GitHub repository.
2. Upload the three files to the repository root.
3. Settings → Pages → Deploy from a branch → main / (root).

## New section
`#parallax` uses a sticky viewport with three separate layers: background architecture, floating signage and foreground translucent structural beams. JavaScript maps section scroll progress (0–1) to independent translate and rotate transforms. It respects `prefers-reduced-motion`. No external image assets are required; all graphics are original CSS/SVG.

Tune the motion amplitudes in `updateCamera()` in `script.js`.
