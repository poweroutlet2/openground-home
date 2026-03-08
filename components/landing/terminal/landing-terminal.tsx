"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconArrowRight,
  IconBook,
  IconCheck,
  IconX,
  IconMinus,
  IconSend,
} from "@tabler/icons-react";
import {
  HERO,
  PROBLEM,
  FEATURES,
  HOW_IT_WORKS,
  COMPARISON,
  ENTERPRISE,
  FOOTER,
  GITHUB_URL,
  DOCS_URL,
} from "../content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function TerminalWindow({
  children,
  title = "terminal",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl shadow-emerald-500/5">
      <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/80 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
        </div>
        <span className="ml-2 font-mono text-xs text-zinc-500">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function ComparisonIcon({ icon: Icon }: { icon: typeof IconCheck }) {
  if (Icon === IconCheck)
    return <IconCheck size={18} className="text-emerald-400" />;
  if (Icon === IconX) return <IconX size={18} className="text-red-400" />;
  return <IconMinus size={18} className="text-zinc-500" />;
}

export function LandingTerminal() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "847e1d6a-a0cf-4795-961d-039d0f53727c",
          subject: "Enterprise Inquiry from openground landing page",
          from_name: formData.name,
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* Hero glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-emerald-500/[0.07] blur-[120px]" />

      {/* Header with GitHub link */}
      <header className="relative px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-end">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-emerald-500/50 hover:bg-zinc-900 hover:text-emerald-400"
            aria-label="View on GitHub"
          >
            <IconBrandGithub size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs tracking-wide text-emerald-400">
              v0.13 — open source
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 font-mono text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            {HERO.tagline.split(" ").map((word, i) =>
              word.toLowerCase() === "docs" || word.toLowerCase() === "ai" ? (
                <span key={i} className="text-emerald-400">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              <IconBrandGithub size={20} />
              {HERO.cta_primary}
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <IconBook size={20} />
              {HERO.cta_secondary}
            </a>
          </motion.div>

          {/* Hero terminal */}
          <motion.div variants={fadeUp} className="mx-auto mt-16 max-w-2xl">
            <TerminalWindow>
              <div className="space-y-2">
                <p>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-zinc-300">openground add nextjs</span>
                </p>
                <p className="text-zinc-600">
                  Extracting docs from sitemap... 142 pages
                </p>
                <p className="text-zinc-600">
                  Chunking and embedding... done in 8.3s
                </p>
                <p className="text-zinc-600">
                  Stored in local LanceDB ✓
                </p>
                <p className="mt-3">
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-zinc-300">
                    openground install-mcp --cursor
                  </span>
                </p>
                <p className="text-zinc-600">
                  MCP server configured for Cursor ✓
                </p>
                <p className="mt-3">
                  <span className="text-zinc-500">
                    {"// Now your AI agent can search Next.js docs locally"}
                  </span>
                </p>
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Problem ── */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-mono text-3xl font-bold md:text-4xl"
          >
            {PROBLEM.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg text-zinc-400"
          >
            {PROBLEM.subheading}
          </motion.p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROBLEM.points.map((point, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-lg border border-white/5 bg-zinc-900/50 p-6 transition-colors hover:border-emerald-500/20"
              >
                <div className="mb-3 font-mono text-xs text-emerald-400">
                  0{i + 1}
                </div>
                <h3 className="mb-2 font-mono text-lg font-semibold">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center">
            <span className="font-mono text-sm text-emerald-400">
              Features
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold md:text-4xl">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group rounded-lg border border-white/5 bg-zinc-900/30 p-6 transition-all hover:border-emerald-500/20 hover:bg-zinc-900/60"
              >
                <div className="mb-4 inline-flex rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-400">
                  <feature.icon size={22} />
                </div>
                <h3 className="mb-2 font-mono text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center">
            <span className="font-mono text-sm text-emerald-400">
              How it works
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold md:text-4xl">
              {HOW_IT_WORKS.heading}
            </h2>
          </motion.div>

          <div className="mt-16 space-y-8">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid items-center gap-8 md:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="font-mono text-xs text-emerald-400">
                    Step {step.step}
                  </div>
                  <h3 className="mt-2 font-mono text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-zinc-400">{step.description}</p>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <TerminalWindow>
                    <p>
                      <span className="text-emerald-400">$</span>{" "}
                      <span className="text-zinc-200">{step.command}</span>
                    </p>
                  </TerminalWindow>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Comparison ── */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center">
            <span className="font-mono text-sm text-emerald-400">
              Comparison
            </span>
            <h2 className="mt-3 font-mono text-3xl font-bold md:text-4xl">
              {COMPARISON.heading}
            </h2>
            <p className="mt-4 text-zinc-400">{COMPARISON.subheading}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 overflow-x-auto rounded-lg border border-white/5"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-zinc-900/60">
                  <th className="px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    openground
                  </th>
                  <th className="px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Context7
                  </th>
                  <th className="px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Web Search
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.dimensions.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 transition-colors hover:bg-zinc-900/40"
                  >
                    <td className="px-6 py-4 font-medium">{row.dimension}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <ComparisonIcon icon={row.openground.icon} />
                        <span className="text-zinc-300">
                          {row.openground.text}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <ComparisonIcon icon={row.context7.icon} />
                        <span className="text-zinc-500">
                          {row.context7.text}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <ComparisonIcon icon={row.websearch.icon} />
                        <span className="text-zinc-500">
                          {row.websearch.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Enterprise ── */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div variants={fadeUp}>
              <span className="font-mono text-sm text-emerald-400">
                Enterprise
              </span>
              <h2 className="mt-3 font-mono text-3xl font-bold md:text-4xl">
                {ENTERPRISE.heading}
              </h2>
              <p className="mt-4 text-zinc-400">{ENTERPRISE.subheading}</p>
              <ul className="mt-8 space-y-3">
                {ENTERPRISE.offerings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <IconCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/5 bg-zinc-900/50 p-6"
              >
                {formStatus === "success" ? (
                  <div className="space-y-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                    <IconCheck size={48} className="mx-auto text-emerald-400" />
                    <h3 className="font-mono text-xl font-semibold text-emerald-400">Message sent!</h3>
                    <p className="text-zinc-300">
                      Thanks for reaching out. The openground team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <input
                      type="hidden"
                      name="access_key"
                      value="847e1d6a-a0cf-4795-961d-039d0f53727c"
                    />
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-zinc-400">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={formStatus === "loading"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 disabled:opacity-50"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-zinc-400">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        disabled={formStatus === "loading"}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-md border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 disabled:opacity-50"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-zinc-400">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        disabled={formStatus === "loading"}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-md border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 disabled:opacity-50"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-zinc-400">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        disabled={formStatus === "loading"}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-md border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 disabled:opacity-50"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-emerald-400 disabled:opacity-50"
                    >
                      {formStatus === "loading" ? "Sending..." : (
                        <>
                          <IconSend size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-bold text-emerald-400">
              openground
            </span>
            <span className="text-sm text-zinc-500">{FOOTER.tagline}</span>
          </div>
          <div className="flex gap-6">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
                <IconArrowRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
