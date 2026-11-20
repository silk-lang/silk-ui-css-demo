# SilkUI now supports CSS + React + Tailwind!!!

A 2000s web announcement in a Silk UI React app, styled with Tailwind CSS 4 and no SVG: a `<marquee>`, WordArt, a blinking NEW! starburst, a hit counter and under-construction tape. It runs in a desktop window.

```sh
silk task dev
silk task build --release
```

Edit `web/src/app.css` or the literal classes in `web/src/` while the app runs. `@tailwindcss/vite` produces ordinary CSS; `@silkui/vite` compiles it into `dist/app.sheet`, which the release pipeline embeds before the first frame. Release stylesheet adoption needs no stylesheet text compiler or raw CSS source.

`web/src/App.tsx` lays out the page. `web/src/Marquee.tsx` rebuilds `<marquee>`: the text's left padding is the banner's full width, so it starts past the right edge, and the `marquee` keyframes move it by its own width until it leaves on the left. `web/src/Retro.tsx` has the 16-point `Starburst` (four squares turned by 22.5° each) and the `HitCounter`. `animate-blink` is the `<blink>` tag.

`web/src/WordArt.tsx` has five styles, each sized by the inherited font size. The custom utilities they use (`@utility`), fonts and animations (`@theme`) are in `app.css`. Four of them draw the text twice through `Layers`: a styled copy behind, and a face in front, since a gradient clipped to text (`bg-clip-text text-transparent`) cannot carry shadows of its own.

- `ExtrudedWordArt` stacks hard shadows (`text-shadow-extrude`) behind a gold gradient face for 3D depth. A perspective `rotate-y` and a `skew-y` on their wrapper tilt both together.
- `RainbowWordArt` fills the text with a horizontal rainbow (`bg-rainbow`) over a gray copy flattened onto the baseline (`scale-y-50`) and slanted left (`skew-x-30`) as a cast shadow.
- `ChromeWordArt` puts a silver gradient over a dark extrusion in 2px steps down and to the left (`text-shadow-chrome`), falling away to the right.
- `VioletWordArt` puts a violet gradient over one periwinkle copy offset down and right, rising to the right.
- `WavyWordArt` puts each letter in its own box and stretches (`scale-y`) and tilts (`skew-y`) it from the baseline by its place on a cosine wave. Its solid fill carries its own shadows (`text-shadow-rise`): eight 1px offsets for an outline, since Silk UI ignores `-webkit-text-stroke`, then a navy extrusion rising above the letters.

`src/tasks.silk` defines the window and build tasks. The first development build installs the Vite dependencies and builds the native host. JavaScript templates currently support the window target.
