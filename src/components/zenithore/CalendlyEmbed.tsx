import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/zenithora0",
  minHeight = "650px",
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Calendly widget initialization via data attribute
    const el = containerRef.current;
    if (el && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url,
        parentElement: el,
        prefill: {},
        utm: {},
      });
    }

    return () => {
      // Clean up any injected iframe if component unmounts
      const iframes = containerRef.current?.querySelectorAll("iframe");
      iframes?.forEach((iframe) => iframe.remove());
    };
  }, [url]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl overflow-hidden"
      style={{ minHeight }}
    >
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full"
        style={{ minHeight }}
        data-url={url}
      />
    </motion.div>
  );
}
