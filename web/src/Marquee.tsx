/**
 * Netscape-era `<marquee>`: the text enters at the right edge and scrolls off the left, forever,
 * in Comic Sans that cycles through neon colors.
 */
export function Marquee({ text }: { text: string }) {
  return (
    <box className="overflow-hidden border-y-4 border-dashed border-fuchsia-500 bg-black py-2">
      {/* The left padding is the banner's full width, so the text starts just past its right edge. */}
      <box className="w-max animate-marquee pl-[100%] motion-reduce:animate-none motion-reduce:pl-4">
        <box className="animate-color-cycle font-comic text-4xl font-bold text-yellow-300">{text}</box>
      </box>
    </box>
  );
}
