import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Clock, Video, Sparkles } from "lucide-react";

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/zenithora0",
  minHeight = "720px",
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Theme Calendly to match Noir & Gold palette via official URL params
  const themedUrl = `${url}?hide_gdpr_banner=1&background_color=0d0d0d&text_color=f5f5f5&primary_color=c9a84c`;

  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const init = () => {
      const el = containerRef.current;
      if (el && (window as any).Calendly) {
        el.innerHTML = "";
        (window as any).Calendly.initInlineWidget({
          url: themedUrl,
          parentElement: el,
          prefill: {},
          utm: {},
        });
      }
    };

    if ((window as any).Calendly) {
      init();
    } else {
      const s = document.getElementById("calendly-script");
      s?.addEventListener("load", init, { once: true });
    }

    return () => {
      const iframes = containerRef.current?.querySelectorAll("iframe");
      iframes?.forEach((iframe) => iframe.remove());
    };
  }, [themedUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative rounded-3xl border border-primary/25 bg-card/60 backdrop-blur-xl overflow-hidden shadow-glow"
    >
      {/* Ambient gold glow */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

      {/* Premium header */}
      <div className="relative flex items-center justify-between gap-4 border-b border-primary/15 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <CalendarCheck className="h-4 w-4 text-primary-foreground" />
          </span>
          <div>
            <div className="font-display text-sm font-semibold tracking-tight">Book a Strategy Call</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Live availability</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3 text-primary" /> 30 min</span>
          <span className="inline-flex items-center gap-1.5"><Video className="h-3 w-3 text-primary" /> Google Meet</span>
          <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-primary" /> Free</span>
        </div>
      </div>

      {/* Calendly iframe holder */}
      <div className="relative bg-[#0d0d0d]">
        <div
          ref={containerRef}
          className="calendly-inline-widget w-full"
          style={{ minHeight, height: minHeight }}
          data-url={themedUrl}
        />
      </div>
    </motion.div>
  );
}
