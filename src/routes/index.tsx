import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Bot, PhoneCall, Filter, CalendarCheck, MessageSquareHeart, Cog,
  Clock, Repeat, TrendingDown, Sparkles, Rocket, Plug, Layers, BarChart3, LifeBuoy,
  Linkedin, Twitter, Github, Star, Zap, ShieldCheck, Infinity as InfinityIcon,
} from "lucide-react";
import { Navbar } from "@/components/zenithore/Navbar";
import { NeuralVisual } from "@/components/zenithore/NeuralVisual";
import { Section } from "@/components/zenithore/Section";
import { Counter } from "@/components/zenithore/Counter";
import { ContactForm } from "@/components/zenithore/ContactForm";

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
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const solutions = [
  { icon: Bot, title: "AI Chat Assistants", desc: "Provide instant customer support and lead qualification." },
  { icon: PhoneCall, title: "AI Voice Agents", desc: "Handle incoming calls and answer common questions." },
  { icon: Filter, title: "Lead Qualification Automation", desc: "Automatically identify and prioritize high-quality leads." },
  { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Reduce back-and-forth communication with automated booking." },
  { icon: MessageSquareHeart, title: "Customer Follow-Up Systems", desc: "Keep prospects engaged through intelligent follow-up workflows." },
  { icon: Cog, title: "Business Process Automation", desc: "Automate repetitive tasks and improve operational efficiency." },
];

const problems = [
  { icon: Clock, title: "Slow Response Times", desc: "Leads cool off while teams scramble to reply across channels." },
  { icon: Repeat, title: "Repetitive Manual Tasks", desc: "Teams burn hours on work AI could handle instantly." },
  { icon: TrendingDown, title: "Missed Opportunities", desc: "Disorganized follow-up leaves real revenue on the table." },
];

const features = [
  { icon: Sparkles, title: "Custom AI Solutions", desc: "Built to fit your workflows — never one-size-fits-all." },
  { icon: Rocket, title: "Fast Deployment", desc: "Ship in weeks, not quarters, with proven playbooks." },
  { icon: Plug, title: "Seamless Integration", desc: "Connects to the CRM, helpdesk, and tools you already use." },
  { icon: Layers, title: "Scalable Infrastructure", desc: "Enterprise-grade architecture that grows with you." },
  { icon: BarChart3, title: "Data-Driven Optimization", desc: "Continuous tuning based on real performance signals." },
  { icon: LifeBuoy, title: "Dedicated Support", desc: "A team that owns outcomes alongside yours." },
];

const steps = [
  { n: "01", title: "Discovery", desc: "Understand goals, workflows and business challenges." },
  { n: "02", title: "Strategy", desc: "Design an AI solution tailored to business needs." },
  { n: "03", title: "Implementation", desc: "Deploy and integrate automation systems." },
  { n: "04", title: "Optimization", desc: "Continuously improve performance and efficiency." },
];

const stats = [
  { value: 40, suffix: "%", label: "Faster Response Times" },
  { value: 60, suffix: "%", label: "Reduction in Repetitive Tasks" },
  { value: 3, suffix: "X", label: "Operational Efficiency" },
  { value: 24, suffix: "/7", label: "Customer Engagement" },
];

const testimonials = [
  { name: "Amara Okafor", role: "COO, Northwind Health", quote: "Zenithore cut our intake time in half. The AI feels like a real teammate — calm, accurate, and always on.", initials: "AO" },
  { name: "David Chen", role: "Head of Ops, Vantage Logistics", quote: "Implementation was painless and the impact was immediate. Our SLAs have never been tighter.", initials: "DC" },
  { name: "Priya Raman", role: "Founder, Aster & Co.", quote: "We finally stopped losing leads at midnight. Bookings are up 38% and the team breathes easier.", initials: "PR" },
];

const trustItems = [
  { icon: Zap, label: "Fast Implementation" },
  { icon: Bot, label: "AI-Powered Workflows" },
  { icon: ShieldCheck, label: "24/7 Automation" },
  { icon: InfinityIcon, label: "Scalable Solutions" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden">
      {/* Global ambient backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px] animate-float" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <Navbar />

      {/* HERO */}
      <section id="home" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Enterprise AI Automation
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              AI Systems That Help Businesses{" "}
              <span className="text-gradient">Work Smarter, Respond Faster</span>, and Grow Efficiently
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              We help businesses automate repetitive tasks, streamline communication, and improve customer experiences using advanced AI solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-white shadow-glow hover:opacity-90 transition"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-foreground/90 hover:bg-white/5 transition"
              >
                See Solutions
              </a>
            </div>

            <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <t.icon className="h-4 w-4 text-primary" />
                  {t.label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 sm:p-10 shadow-card">
              <NeuralVisual />
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 text-xs font-medium shadow-glow hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Agents online · 1,284 conversations
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 text-xs font-medium hidden sm:block">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-primary" /> Avg. response 0.6s
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section
        eyebrow="The cost of doing nothing"
        title="Businesses Lose Valuable Time Every Day"
        subtitle="The friction in your operations is quiet but expensive — and AI can remove most of it."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl glass p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-radial)" }} />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section
        id="solutions"
        eyebrow="Solutions"
        title="AI Solutions Designed for Modern Businesses"
        subtitle="A complete toolkit of automation systems built around the way your team already works."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent hover:from-primary/60 hover:via-accent/40 transition"
            >
              <div className="relative h-full rounded-2xl bg-card/70 backdrop-blur-xl p-7 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-primary transition">
                  <s.icon className="h-5 w-5 text-foreground group-hover:text-white transition" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="relative mt-6 inline-flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition">
                  Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="Process"
        title="Our Process"
        subtitle="A focused four-step engagement designed to deliver measurable outcomes — not vapor."
      >
        <div className="relative">
          <div aria-hidden className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-display text-sm tracking-[0.2em] text-primary">STEP {s.n}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-md md:inline-block">{s.desc}</p>
                </div>
                <div className={`hidden md:block ${i % 2 === 0 ? "" : ""}`} />
                {/* node */}
                <span className="absolute left-6 md:left-1/2 top-3 -translate-x-1/2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section
        eyebrow="Why Zenithore"
        title="Why Businesses Choose Zenithore"
        subtitle="Built like a product, delivered like a partner."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }}
              className="glass rounded-2xl p-7 hover:bg-white/[0.06] transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <f.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RESULTS */}
      <Section
        id="results"
        eyebrow="Results"
        title="Impact That Matters"
        subtitle="What our clients see in the first 90 days."
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="glass rounded-2xl p-8 text-center"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Voices"
        title="Loved by operators who care about outcomes"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-xs font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="About Zenithore">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.p {...fadeUp} className="text-lg text-muted-foreground leading-relaxed">
            Zenithore helps businesses unlock efficiency through intelligent AI systems and automation. Our mission is to simplify operations, improve customer experiences, and help organizations scale with confidence.
          </motion.p>
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-3xl p-8 text-center">
                  <Sparkles className="mx-auto h-10 w-10 text-primary" />
                  <div className="mt-3 font-display text-2xl font-semibold">Built for Scale</div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-[0.2em]">AI · Automation · Outcomes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl glass p-10 sm:p-16 text-center"
          >
            <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
            <div aria-hidden className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Ready To <span className="text-gradient">Transform Your Business?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Discover how AI automation can help your business save time, improve efficiency, and deliver better customer experiences.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-medium text-white shadow-glow hover:opacity-90 transition"
            >
              Book Your Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's design your AI roadmap"
        subtitle="Tell us about your business and we'll respond within one business day."
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
              <div className="mt-1 font-medium">hello@zenithore.ai</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Strategy Call</div>
              <div className="mt-1 font-medium">30 minutes · No commitment</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll review your workflows and identify the highest-ROI places to deploy AI first.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 mt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="font-display text-lg font-semibold">Zenithore</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Premium AI automation for modern businesses. Built for outcomes, designed for scale.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" items={["About", "Process", "Careers", "Contact"]} />
          <FooterCol title="Solutions" items={["AI Chat", "Voice Agents", "Lead Qualification", "Process Automation"]} />
          <FooterCol title="Resources" items={["Case Studies", "Blog", "Documentation", "Support"]} />
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Zenithore. All rights reserved.</div>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
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
