const logos = [
  "NORTHWIND", "VANTAGE", "ASTER & CO.", "HELIOS LABS", "MERIDIAN", "OBSIDIAN", "QUANTUM7", "LUMEN", "ATLAS GROUP", "KOROVA",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden py-10 border-y border-primary/10">
      <div aria-hidden className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div aria-hidden className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap will-change-transform">
        {[...logos, ...logos].map((l, i) => (
          <span
            key={i}
            className="font-display text-2xl tracking-[0.3em] text-muted-foreground/60 hover:text-primary transition-colors"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}