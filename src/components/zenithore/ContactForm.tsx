import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

export function ContactForm() {
  const [data, setData] = useState<FormData>({ name: "", email: "", company: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormData;
        errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 font-display text-2xl font-semibold">Thanks — we'll be in touch</h3>
        <p className="mt-2 text-muted-foreground">Our team will reach out within one business day.</p>
      </motion.div>
    );
  }

  const field = "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition";

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input className={field} placeholder="Name" value={data.name} onChange={update("name")} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <input className={field} placeholder="Email" type="email" value={data.email} onChange={update("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <input className={field} placeholder="Company" value={data.company} onChange={update("company")} />
        <input className={field} placeholder="Phone" value={data.phone} onChange={update("phone")} />
      </div>
      <div>
        <textarea className={field + " min-h-[140px] resize-y"} placeholder="Tell us about your goals" value={data.message} onChange={update("message")} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-medium text-white shadow-glow hover:opacity-90 disabled:opacity-60 transition"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Schedule Consultation
      </button>
    </form>
  );
}