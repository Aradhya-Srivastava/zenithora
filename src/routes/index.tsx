import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Bot, PhoneCall, Filter, CalendarCheck, MessageSquareHeart, Cog,
  Clock, Repeat, TrendingDown, Sparkles, Rocket, Plug, Layers, BarChart3, LifeBuoy,
  Linkedin, Twitter, Github, Star, Zap, ShieldCheck, Infinity as InfinityIcon, Quote,
} from "lucide-react";
import { Navbar } from "@/components/zenithore/Navbar";
import { GoldOrb } from "@/components/zenithore/GoldOrb";
import { Section } from "@/components/zenithore/Section";
import { Counter } from "@/components/zenithore/Counter";
import { ContactForm } from "@/components/zenithore/ContactForm";
import { CalendlyEmbed } from "@/components/zenithore/CalendlyEmbed";
import { BentoCard } from "@/components/zenithore/BentoCard";
import { Marquee } from "@/components/zenithore/Marquee";
import zenithoreLogo from "@/assets/zenithore-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenithore — AI Automation for Modern Businesses" },
      { name: "description", content: "Premium AI systems that help businesses work smarter, respond faster, and grow efficiently." },
      { property: "og:title", content: "Zenithore — AI Automation for Modern Businesses" },
      { property: "og:description", content: "Chat assistants, voice agents, lead qualification, and full process automation." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
} as const;

const solutions = [
  { icon: Bot, title: "AI Chat Assistants", desc: "Instant customer support and lead qualification across every channel." },
  { icon: PhoneCall, title: "AI Voice Agents", desc: "Natural inbound and outbound calls answered in under a second." },
  { icon: Filter, title: "Lead Qualification", desc: "Identify and prioritize high-intent leads automatically." },
  { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Replace back-and-forth with smart, calendar-aware booking." },
  { icon: MessageSquareHeart, title: "Customer Follow-Up", desc: "Keep prospects warm with intelligent multi-touch workflows." },
  { icon: Cog, title: "Process Automation", desc: "Quietly automate the repetitive work that eats your team's day." },
];

const problems = [
  { icon: Clock, k: "01", title: "Slow Response Times", desc: "Leads cool while teams scramble across channels." },
  { icon: Repeat, k: "02", title: "Repetitive Manual Work", desc: "Hours wasted on work AI handles in seconds." },
  { icon: TrendingDown, k: "03", title: "Missed Opportunities", desc: "Disorganized follow-up leaves revenue on the table." },
];

const features = [
  { icon: Sparkles, title: "Custom AI Solutions", desc: "Built to fit your workflows. Never one-size-fits-all." },
  { icon: Rocket, title: "Fast Deployment", desc: "Ship in weeks, not quarters, with proven playbooks." },
  { icon: Plug, title: "Seamless Integration", desc: "Connects to the CRM, helpdesk, and tools you already use." },
  { icon: Layers, title: "Scalable Infrastructure", desc: "Enterprise-grade architecture that grows with you." },
  { icon: BarChart3, title: "Data-Driven Optimization", desc: "Continuous tuning against real performance signals." },
  { icon: LifeBuoy, title: "Dedicated Support", desc: "A team that owns outcomes alongside yours." },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We map workflows, identify the highest-ROI automation surfaces, and align on outcomes.", icon: Filter },
  { n: "02", title: "Strategy", desc: "We architect a tailored AI system — agents, integrations, guardrails, and success metrics.", icon: Layers },
  { n: "03", title: "Implementation", desc: "We deploy, integrate, and train. Your team is hands-on from day one.", icon: Rocket },
  { n: "04", title: "Optimization", desc: "We monitor, tune, and compound performance over time. The system gets sharper every week.", icon: BarChart3 },
];

const stats = [
  { value: 40, suffix: "%", label: "Faster Response Times" },
  { value: 60, suffix: "%", label: "Reduction in Repetitive Tasks" },
  { value: 3, suffix: "X", label: "Operational Efficiency" },
  { value: 24, suffix: "/7", label: "Customer Engagement" },
];

const testimonials = [
  { name: "Amara Okafor", role: "COO · Northwind Health", quote: "Zenithore cut our intake time in half. The AI feels like a real teammate — calm, accurate, always on.", initials: "AO" },
  { name: "David Chen", role: "Head of Ops · Vantage Logistics", quote: "Implementation was painless. Our SLAs have never been tighter and the team is finally focused on real work.", initials: "DC" },
  { name: "Priya Raman", role: "Founder · Aster & Co.", quote: "We finally stopped losing leads at midnight. Bookings are up 38% and the team breathes easier.", initials: "PR" },
];

const trustItems = [
  { icon: Zap, label: "Fast Implementation" },
  { icon: Bot, label: "AI-Powered Workflows" },
  { icon: ShieldCheck, label: "24/7 Automation" },
  { icon: InfinityIcon, label: "Scalable Solutions" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden selection:bg-primary/40 selection:text-foreground">
      {/* Global ambient backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh animate-mesh" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,oklch(0.78_0.13_85)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.78_0.13_85)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--noise)", opacity: 0.25, mixBlendMode: "overlay" }} />
      </div>

      <Navbar />
      <Hero />
      <Marquee />
      <Problems />
      <Solutions />
      <Process />
      <Features />
      <Results />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative pt-36 pb-28 sm:pt-44 sm:pb-36">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Enterprise AI · Est. for outcomes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em]"
          >
            AI Systems That Help Businesses{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Work Smarter</span>
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-px gold-divider" />
            </span>
            , Respond Faster, and Grow Efficiently.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            We design and deploy advanced AI systems that automate repetitive work, streamline communication, and deliver measurably better customer experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow overflow-hidden"
            >
              <span className="absolute inset-0 animate-shimmer opacity-60" />
              <span className="relative">Book a Free Consultation</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-medium text-foreground/90 hover:border-primary/60 hover:bg-primary/5 transition"
            >
              See Solutions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <ul className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6">
            {trustItems.map((t, i) => (
              <motion.li
                key={t.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.08 }}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <t.icon className="h-3.5 w-3.5 text-primary" />
                {t.label}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <GoldOrb />

          {/* floating data chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 -left-2 sm:left-2 rounded-xl glass border border-primary/20 px-4 py-3 text-xs shadow-glow"
          >
            <div className="flex items-center gap-2 text-foreground/90">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Agents online · 1,284 chats
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-2 sm:right-4 rounded-xl glass border border-primary/20 px-4 py-3 text-xs"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" /> Avg. response 0.6s
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-6 rounded-xl glass border border-primary/20 px-4 py-3 text-xs hidden md:block"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <BarChart3 className="h-3.5 w-3.5 text-primary" /> +38% bookings
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Problems() {
  return (
    <Section
      eyebrow="The cost of doing nothing"
      title={<>Businesses lose <span className="text-gradient">valuable time</span> every day.</>}
      subtitle="The friction in your operations is quiet but expensive. AI removes most of it."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <BentoCard className="p-7 h-full">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/5">
                  <p.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">{p.k}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Solutions() {
  return (
    <Section
      id="solutions"
      eyebrow="Solutions"
      title={<>A complete <span className="text-gradient">AI toolkit</span> for modern businesses.</>}
      subtitle="Six battle-tested systems, designed to drop into the way your team already works."
    >
      {/* Bento: 1 hero tile + 5 mixed tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-5 lg:auto-rows-[14rem]">
        {/* Hero tile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 lg:row-span-2"
        >
          <BentoCard className="h-full overflow-hidden">
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <Bot className="h-6 w-6 text-primary-foreground" />
                </span>
                <h3 className="mt-6 font-display text-3xl sm:text-4xl font-semibold tracking-tight">AI Chat Assistants</h3>
                <p className="mt-3 max-w-md text-muted-foreground">Instant customer support and qualification across web, WhatsApp, and email — answering in your brand voice, 24/7.</p>
              </div>
              {/* chat mockup */}
              <div className="relative mt-6 space-y-2 max-w-md">
                <div className="rounded-xl border border-primary/15 bg-background/40 px-4 py-3 text-sm">
                  <span className="text-muted-foreground">Customer:</span> Can I move my appointment to Friday?
                </div>
                <div className="ml-8 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                  <span className="text-primary font-medium">Zenithore AI:</span> Yes — I found 10:30, 1:00, and 3:45 on Friday. Which works best?
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground pl-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> responded in 0.4s
                </div>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {solutions.slice(1).map((s, i) => {
          const spans = [
            "lg:col-span-3", // voice — wide
            "lg:col-span-2", // lead
            "lg:col-span-1", // appointment small
            "lg:col-span-2", // follow-up
            "lg:col-span-3", // process automation — wide
          ];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className={spans[i]}
            >
              <BentoCard className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/5 group-hover:bg-gradient-primary transition">
                    <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-auto pt-4 inline-flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition">
                    Explore <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </BentoCard>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title={<>A focused engagement, <span className="text-gradient">designed for outcomes.</span></>}
      subtitle="Four deliberate phases. No vapor, no theater — just systems that compound."
    >
      <div className="grid lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <BentoCard className="h-full">
              <div className="p-7 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold text-gradient">{s.n}</span>
                  <s.icon className="h-5 w-5 text-primary/60" />
                </div>
                <div className="mt-6 h-px gold-divider" />
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Features() {
  return (
    <Section
      eyebrow="Why Zenithore"
      title={<>Built like a product. <span className="text-gradient">Delivered like a partner.</span></>}
    >
      {/* Bento: 6 tiles with varied heights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
          >
            <BentoCard className="h-full">
              <div className="p-7 h-full flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/5">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Results() {
  return (
    <Section
      id="results"
      eyebrow="Results"
      title={<>Impact that <span className="text-gradient">moves the P&L.</span></>}
      subtitle="What our clients typically see within the first 90 days."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <BentoCard className="h-full">
              <div className="p-8 text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section
      eyebrow="Voices"
      title={<>Loved by operators who care about <span className="text-gradient">outcomes.</span></>}
    >
      <div className="grid lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <BentoCard className="h-full">
              <div className="p-7 h-full flex flex-col">
                <Quote className="h-7 w-7 text-primary/60" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                      {t.initials}
                    </span>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>Quiet systems. <span className="text-gradient">Loud outcomes.</span></>}>
      <div className="grid lg:grid-cols-5 gap-10 items-center">
        <motion.div {...fadeUp} className="lg:col-span-3 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zenithore helps businesses unlock efficiency through intelligent AI systems and automation. Our mission is to simplify operations, improve customer experiences, and help organizations scale with confidence.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We pair senior strategists with applied AI engineers — and we deploy in weeks. Every system we ship is measured, tuned, and accountable to a business outcome.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { k: "12+", v: "Industries served" },
              { k: "98%", v: "Client retention" },
              { k: "< 4 wk", v: "Avg. time to value" },
            ].map((x) => (
              <div key={x.v} className="rounded-xl border border-primary/15 bg-card/40 px-4 py-3">
                <div className="font-display text-2xl text-gradient">{x.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{x.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="lg:col-span-2">
          <GoldOrb />
        </motion.div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card/40 backdrop-blur-xl p-10 sm:p-16 text-center"
        >
          <div aria-hidden className="absolute inset-0 bg-mesh animate-mesh -z-10" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
          <div aria-hidden className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/20 blur-3xl" />
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3 w-3" /> Start the conversation
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl font-semibold tracking-tight">
            Ready to <span className="text-gradient">transform your business?</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover how AI automation can help your business save time, improve efficiency, and deliver better customer experiences.
          </p>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow overflow-hidden relative"
          >
            <span className="absolute inset-0 animate-shimmer opacity-60" />
            <span className="relative">Book Your Free Consultation</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's design your <span className="text-gradient">AI roadmap.</span></>}
      subtitle="Book a free strategy call. We'll review your workflows and identify the highest-ROI places to deploy AI first."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-5">
          <BentoCard className="p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-primary">Email</div>
            <a href="mailto:zenithora0@gmail.com" className="mt-2 block font-medium text-lg hover:text-primary transition">zenithora0@gmail.com</a>
          </BentoCard>
          <BentoCard className="p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-primary">Strategy Call</div>
            <div className="mt-2 font-medium text-lg">30 minutes · No commitment</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              We'll review your workflows and identify the highest-ROI places to deploy AI first.
            </p>
          </BentoCard>
          <BentoCard className="p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-primary">Response Time</div>
            <div className="mt-2 font-medium text-lg">&lt; 24 business hours</div>
          </BentoCard>
        </div>
        <div className="lg:col-span-3">
          <CalendlyEmbed />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-primary/10 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2">
            <img src={zenithoreLogo.url} alt="Zenithore" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-semibold">Zenithore</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium AI automation for modern businesses. Built for outcomes. Designed for scale.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" items={["About", "Process", "Careers", "Contact"]} />
        <FooterCol title="Solutions" items={["AI Chat", "Voice Agents", "Lead Qualification", "Process Automation"]} />
        <FooterCol title="Resources" items={["Case Studies", "Blog", "Documentation", "Support"]} />
      </div>
      <div className="border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Zenithore. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-primary">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-foreground/80 hover:text-foreground transition">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}