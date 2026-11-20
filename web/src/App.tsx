import { Marquee } from "./Marquee";
import { HitCounter, Starburst } from "./Retro";
import { ChromeWordArt, ExtrudedWordArt, RainbowWordArt, VioletWordArt, WavyWordArt } from "./WordArt";

export function App() {
  return (
    <box className="absolute inset-0 flex flex-col bg-white">
      <Marquee text="★ BREAKING NEWS!!! ★ SilkUI now supports CSS + React + Tailwind ★ Native windows, no browser required ★ Tell all your friends!!! ★" />
      <box className="flex flex-1 flex-col items-center justify-center gap-10">
        <box className="relative text-[120px]">
          <ExtrudedWordArt text="SilkUI" />
          <box className="absolute -top-16 -right-44">
            <Starburst text="NEW!" />
          </box>
        </box>
        <box className="text-[44px]">
          <RainbowWordArt text="now supports!!!" />
        </box>
        <box className="flex items-center gap-10 text-[80px]">
          <ChromeWordArt text="CSS" />
          <box className="animate-blink font-comic text-6xl font-bold text-red-600">+</box>
          <WavyWordArt text="React" />
          <box className="animate-blink font-comic text-6xl font-bold text-red-600">+</box>
          <VioletWordArt text="Tailwind" />
        </box>
      </box>
      <box className="h-3 bg-hazard" />
      <box className="flex items-center justify-center gap-6 bg-black py-2 font-comic text-sm text-yellow-300">
        <box className="animate-blink font-bold">UNDER CONSTRUCTION</box>
        <box className="flex items-center gap-2">
          You are visitor <HitCounter count={1337} />
        </box>
        <box>Best viewed in Netscape Navigator 4.0 at 800×600</box>
      </box>
    </box>
  );
}
