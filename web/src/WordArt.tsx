// Every style takes its size from the inherited font size: set `text-[...]` on a parent.

/** The text twice in one place: `back` styles a copy behind, `face` the copy in front. */
function Layers({ text, back, face }: { text: string; back: string; face: string }) {
  return (
    <>
      <box aria-hidden="true" className={`absolute inset-0 ${back}`}>
        {text}
      </box>
      <box className={`relative ${face}`}>{text}</box>
    </>
  );
}

/** 90s WordArt: a gold gradient face over a stacked-shadow extrusion, rising in perspective. */
export function ExtrudedWordArt({ text }: { text: string }) {
  return (
    <box className="perspective-normal">
      <box className="relative -rotate-y-25 -skew-y-12 font-impact leading-none tracking-tight">
        <Layers
          text={text}
          back="text-orange-900 text-shadow-extrude"
          face="bg-linear-to-tr from-orange-600 via-amber-400 to-yellow-200 bg-clip-text text-transparent"
        />
      </box>
    </box>
  );
}

/** 90s WordArt: a rainbow face standing on its own shadow, cast back and to the left. */
export function RainbowWordArt({ text }: { text: string }) {
  return (
    <box className="relative origin-bottom scale-y-135 font-arial font-bold leading-none tracking-tight">
      <Layers
        text={text}
        back="origin-[center_85%] scale-y-50 skew-x-30 text-neutral-400/80"
        face="bg-rainbow bg-clip-text text-transparent"
      />
    </box>
  );
}

/** Each letter's stretch and tilt from the baseline, sampled left to right along one cosine period. */
const WAVE = [
  "scale-y-140",
  "scale-y-120 skew-y-12",
  "scale-y-90 skew-y-12",
  "scale-y-75",
  "scale-y-90 -skew-y-12",
  "scale-y-120 -skew-y-12",
  "scale-y-140",
];

/** 90s WordArt: outlined sky-blue letters with a navy extrusion, rippling along a wave. */
export function WavyWordArt({ text }: { text: string }) {
  const letters = Array.from(text);
  const last = Math.max(letters.length - 1, 1);
  return (
    <box
      role="img"
      aria-label={text}
      className="flex origin-bottom scale-x-125 items-end whitespace-pre font-impact leading-none text-sky-300 text-shadow-rise"
    >
      {letters.map((letter, index) => (
        <box key={index} aria-hidden="true" className={`origin-bottom ${WAVE[Math.round((index / last) * (WAVE.length - 1))]}`}>
          {letter}
        </box>
      ))}
    </box>
  );
}

/** 90s WordArt: brushed chrome over a dark stepped extrusion, falling away to the right. */
export function ChromeWordArt({ text }: { text: string }) {
  return (
    <box className="perspective-normal">
      <box className="relative rotate-y-15 skew-y-12 font-impact leading-none tracking-tight">
        <Layers
          text={text}
          back="text-stone-700 text-shadow-chrome"
          face="bg-linear-to-r from-neutral-400 via-white to-neutral-400 bg-clip-text text-transparent"
        />
      </box>
    </box>
  );
}

/** 90s WordArt: a violet-to-purple face over one periwinkle drop shadow, rising to the right. */
export function VioletWordArt({ text }: { text: string }) {
  return (
    <box className="relative -skew-y-12 font-impact leading-none tracking-tight">
      <Layers
        text={text}
        back="translate-x-1.5 translate-y-1.5 text-indigo-400"
        face="bg-linear-to-b from-violet-800 to-purple-500 bg-clip-text text-transparent"
      />
    </box>
  );
}
