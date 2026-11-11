# Shader reference brief

Source: <https://www.shader.se/>. Local route: `/` on `redheartsecretman.top`.

## Observed structure

- A fixed black WebGL stage fills the viewport while a scroll container drives the page.
- The top navigation is a thin, always-visible row: logo, Home, Selected Work, About Us, Contact, and an outbound CTA.
- The hero uses a very large serif headline on the left, a 3D retro-computer scene on the right, a small scroll cue, atmospheric fog, and subtle film grain.
- Selected Work is a full-screen project carousel. Previous/next controls update the active project and its media while the stage stays pinned.
- About Us is a long, typographic narrative followed by a single CTA.
- Contact is a sparse grid of enquiry, address, social, and new-business details followed by a minimal footer.

## Local mapping

- `index.html`: semantic sections, navigation, project carousel controls, résumé links, and contact content.
- `styles.css`: fixed-stage atmosphere, CRT object, serif typography, responsive layout, grain, and motion.
- `redirect.js`: carousel state, button/keyboard/touchpad/touch/mouse gesture input, pointer parallax, active-section navigation, reduced-motion handling, and scroll-safe interactions.
- `#stage-canvas` in `.ambient` loads the vendored Three.js module and renders a native WebGL layer: a loaded CRT GLTF with lights, depth-scaled particles, and pointer/scroll-driven camera motion. If the module, model or WebGL is unavailable (including a restricted `file://` preview), the canvas hides and the CSS ambient stage remains visible.
- `vendor/three.module.js` is the active Three.js r169 runtime. The loader and its helpers import this same module; `vendor/THREE-LICENSE.txt` is retained. The unused `three.core.js` file is not part of the active import graph.
- `assets/television_02/television_02_1k.gltf` is the primary CRT asset from [Poly Haven Television 02](https://polyhaven.com/sr/a/television_02), by Benny Weimer. The local GLTF, binary buffer and 1K textures are distributed under Poly Haven's CC0 dedication. `vendor/loaders/GLTFLoader.js` loads the asset at runtime; the procedural device remains as a fallback when the asset cannot load.

The page uses self-owned content and CSS-built CRT/fog layers; Shader's private WebGL assets and copy are not copied.


## CRT inner-glass repair (2026-10-24)

The previous generated overlay had inverted vertical UVs and an invented curvature,
with depth testing disabled. Moving or resizing that overlay cannot fit the source
model's actual glass. The HTTP preview reproduced the same fault; it was not a
file-URL cache issue.

`crt-display.mjs` partitions the original indexed mesh into case and glass material
groups. Its glass is one disconnected atlas island: **289 vertices, 512 triangles**.
Positions, normals and triangle winding remain byte-for-byte unchanged. No overlay
mesh or depth-order override is added. The source glass bounds in metres are:

- X: -0.16010 to 0.15644
- Y: 0.14021 to 0.37741
- Z: 0.09008 to 0.12190 (a curved surface, not a plane)

Only glass UVs are remapped: +X maps to increasing U, +Y to increasing V, with
`CanvasTexture.flipY = true`. The original casing retains its atlas UVs and material.
This follows Three.js [material groups](https://threejs.org/docs/pages/BufferGeometry.html)
and [CanvasTexture](https://threejs.org/docs/pages/CanvasTexture.html) contracts.
The screen texture uses a 4:3 canvas, and boot noise starts after the model loads.

Validation: `node --test tests/*.test.mjs` checks source triangle/vertex preservation,
upright UV orientation and ray intersections at the screen centre, edges and bezel.
HTTP previews verified English, Chinese, an alternate pointer angle and a Work slide
change, without browser console errors. Evidence is under `docs/verification/`;
`crt-glass-user-preview.png` is the refreshed user's `http://localhost:4173/` tab.
