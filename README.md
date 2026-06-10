# GSAP Animation Playground

A hands-on reference gallery for **GSAP (GreenSock Animation Platform)**. Each example is a single, self-contained HTML file that loads GSAP from a CDN, runs an animation, and shows the exact code that produced it. The goal: whenever a project needs animation, open an example, see it run, read the code, and lift it.

**Live gallery:** https://sahajamit.github.io/gsap-animation-playground/

## Why this exists

GSAP is the most capable animation library on the web, and as of **30 April 2025 it is 100% free for everyone** - including every plugin that used to require a paid "Club GreenSock" membership (SplitText, ScrollTrigger, DrawSVG, MorphSVG, Flip, GSDevTools, Inertia, and more). This playground exercises the core engine plus every major free plugin so the full toolbox is in one browsable place.

> GSAP = **GreenSock Animation Platform** (named after the company GreenSock). Webflow acquired GreenSock in October 2024 and made the whole library free in April 2025. Source: https://webflow.com/blog/gsap-becomes-free

## How to use

No build step. Two options:

```bash
# 1) just open the gallery file
open index.html

# 2) or serve it (needed for the scroll demos to behave naturally)
python3 -m http.server 8080
# then visit http://localhost:8080/
```

Every template loads GSAP + the plugin it needs straight from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);  // always register a plugin before using it
  gsap.to(".box", { x: 200, duration: 1, ease: "power2.out" });
</script>
```

## Showcase

Composed, real-world scenes that combine multiple plugins, inspired by the [official GSAP showcase](https://gsap.com/showcase/). Find them in `showcase/`:

| Piece | What it shows | Plugin(s) |
|-------|---------------|-----------|
| Scroll Story | momentum scroll, % preloader, full-bleed scenes that crossfade & reveal | ScrollSmoother, ScrollTrigger, SplitText |
| Animated Hero | staggered text reveal, drifting gradient orbs, magnetic button | SplitText, quickTo |
| Horizontal Gallery | vertical scroll drives a pinned section sideways | ScrollTrigger (pin) |
| Grid Reveal + Filter | stagger-in, hover micro-interactions, Flip filtering | Flip |
| Preloader to Reveal | counting loader + staggered curtain wipe | core timeline, SplitText |
| Custom Cursor + Magnetic | eased trailing cursor + buttons that lean toward the pointer | quickTo |

## Plugin & building-block demos

| # | Example | Plugin(s) |
|---|---------|-----------|
| 01 | Tween basics (to / from / fromTo / set) | core |
| 02 | Timeline sequencing & position parameter | core |
| 03 | Stagger grid (radial ripple) | core |
| 04 | Eases visualizer | core |
| 05 | SplitText reveal (chars / words / lines) | SplitText |
| 06 | Typewriter | TextPlugin |
| 07 | ScrambleText (decrypt effect) | ScrambleTextPlugin |
| 08 | ScrollTrigger (reveal + pin + scrub) | ScrollTrigger |
| 09 | ScrollTo (animated scroll) | ScrollToPlugin |
| 10 | ScrollSmoother (momentum + parallax) | ScrollSmoother |
| 11 | DrawSVG (stroke drawing) | DrawSVGPlugin |
| 12 | MorphSVG (shape tweening) | MorphSVGPlugin |
| 13 | MotionPath (follow a curve) | MotionPathPlugin |
| 14 | Draggable + Inertia (flick) | Draggable + InertiaPlugin |
| 15 | Flip (layout transitions) | Flip |
| 16 | Observer (unified input) | Observer |
| 17 | Physics2D (confetti burst) | Physics2DPlugin |
| 18 | GSDevTools + CustomEase | GSDevTools + CustomEase |
| 19 | CustomBounce + CustomWiggle eases | CustomBounce + CustomWiggle |
| 20 | MotionPathHelper (edit a path live) | MotionPathHelper |
| 21 | PhysicsProps (forces, not destinations) | PhysicsPropsPlugin |

## How the harness works

`assets/demo.js` renders the page chrome and prints the live source of each demo's `run()` function into the code panel - so **the code you read is exactly the code that runs**, and the Replay button re-executes it. The shared styling lives in `assets/styles.css` (gallery) and `assets/demo.css` (demo pages).

## Notes & caveats

- The **scroll demos (08-10)** and **GSDevTools (18)** are best viewed over a local server rather than `file://`.
- All plugins are loaded from the public `gsap` npm package on jsDelivr; no token or membership is required.
- This is a reference / example repo, not a published component library. Copy what's useful.

## License

The example code in this repo is free to reuse. GSAP itself is distributed under GreenSock's standard "no charge" license (free, including commercial use): https://gsap.com/community/standard-license/
