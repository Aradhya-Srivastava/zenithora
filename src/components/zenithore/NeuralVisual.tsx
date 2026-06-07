import { motion } from "framer-motion";

// Decorative animated SVG neural-network-style visual
export function NeuralVisual() {
  const nodes = [
    { cx: 50, cy: 50 }, { cx: 50, cy: 150 }, { cx: 50, cy: 250 },
    { cx: 200, cy: 30 }, { cx: 200, cy: 110 }, { cx: 200, cy: 190 }, { cx: 200, cy: 270 },
    { cx: 350, cy: 80 }, { cx: 350, cy: 160 }, { cx: 350, cy: 240 },
    { cx: 500, cy: 150 },
  ];
  const layerA = nodes.slice(0, 3);
  const layerB = nodes.slice(3, 7);
  const layerC = nodes.slice(7, 10);
  const layerD = nodes.slice(10);

  const edges: Array<[typeof nodes[0], typeof nodes[0]]> = [];
  layerA.forEach((a) => layerB.forEach((b) => edges.push([a, b])));
  layerB.forEach((a) => layerC.forEach((b) => edges.push([a, b])));
  layerC.forEach((a) => layerD.forEach((b) => edges.push([a, b])));

  return (
    <div className="relative w-full aspect-[5/3]">
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,oklch(0.68_0.18_262/0.35),transparent_60%)] blur-3xl" />

      <svg viewBox="0 0 550 300" className="relative w-full h-full">
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.68 0.18 262)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="oklch(0.68 0.18 262)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.63 0.22 290)" stopOpacity="0.0" />
          </linearGradient>
          <radialGradient id="node">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="oklch(0.68 0.18 262)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.63 0.22 290)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
            stroke="url(#edge)" strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.2] }}
            transition={{
              pathLength: { duration: 1.2, delay: i * 0.02 },
              opacity: { duration: 4, repeat: Infinity, delay: (i % 8) * 0.3 },
            }}
          />
        ))}

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx} cy={n.cy} r={8}
            fill="url(#node)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: 1 }}
            transition={{
              scale: { duration: 3, repeat: Infinity, delay: i * 0.2 },
              opacity: { duration: 0.6, delay: 0.3 + i * 0.05 },
            }}
          />
        ))}
      </svg>

      {/* floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_12px_2px_oklch(0.68_0.18_262/0.6)]"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}