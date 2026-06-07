import { motion } from "framer-motion";

// Cinematic gold orb visual — replaces neural net with a more premium signature element
export function GoldOrb() {
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* outer ring labels */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {["ANALYZE", "AUTOMATE", "OPTIMIZE", "DEPLOY"].map((label, i) => (
          <span
            key={label}
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] text-primary/80 font-medium"
            style={{ transform: `rotate(${i * 90}deg) translateY(-50%)`, transformOrigin: "center 50vh" }}
          >
            <span style={{ display: "inline-block", transform: `rotate(${-i * 90}deg) translateY(-12px)` }}>{label}</span>
          </span>
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-6 rounded-full border border-primary/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-14 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />

      {/* core glow */}
      <div className="absolute inset-20 rounded-full bg-[radial-gradient(circle,oklch(0.9_0.1_88/0.5),oklch(0.78_0.13_85/0.3)_45%,transparent_70%)] blur-2xl animate-pulse-glow" />
      <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary via-secondary to-primary/50 opacity-90 shadow-glow" />
      <div className="absolute inset-28 rounded-full bg-background/60 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
        <div className="text-center">
          <div className="font-display text-5xl font-semibold text-gradient">Z</div>
          <div className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground">ZENITHORE.AI</div>
        </div>
      </div>

      {/* orbiting nodes */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={deg}
          className="absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24 + i * 4, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: deg }}
        >
          <span
            className="absolute h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_4px_oklch(0.78_0.13_85/0.6)]"
            style={{ transform: `translate(-50%,-50%) translateX(${130 + (i % 3) * 24}px)` }}
          />
        </motion.div>
      ))}

      {/* particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-secondary/70"
          style={{ top: `${(i * 41) % 100}%`, left: `${(i * 67) % 100}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}