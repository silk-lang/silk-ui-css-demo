/** A 16-point starburst seal, four squares turned by 22.5° each, with a blinking label. */
export function Starburst({ text }: { text: string }) {
  return (
    <box className="relative size-28 rotate-12">
      <box className="absolute inset-0 bg-yellow-300" />
      <box className="absolute inset-0 rotate-[22.5deg] bg-yellow-300" />
      <box className="absolute inset-0 rotate-45 bg-yellow-300" />
      <box className="absolute inset-0 rotate-[67.5deg] bg-yellow-300" />
      <box className="absolute inset-0 flex animate-blink items-center justify-center font-comic text-3xl font-bold text-red-600">
        {text}
      </box>
    </box>
  );
}

/** A web counter: each digit of `count`, zero-padded, in its own black cell. */
export function HitCounter({ count }: { count: number }) {
  return (
    <box className="flex gap-0.5 border-2 border-neutral-500 bg-neutral-800 p-0.5">
      {Array.from(String(count).padStart(7, "0"), (digit, index) => (
        <box key={index} className="bg-black px-1 font-mono text-lg font-bold text-lime-400">
          {digit}
        </box>
      ))}
    </box>
  );
}
