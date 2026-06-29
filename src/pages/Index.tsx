import { motion } from "framer-motion";
import portrait from "@/assets/dhanush-portrait.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { StatusBadge } from "@/components/StatusBadge";

const stack = [
  { name: "HTML",    short: "<>",  bg: "#E34F26", fg: "#FFFFFF" },
  { name: "CSS",     short: "{}",  bg: "#1572B6", fg: "#FFFFFF" },
  { name: "JavaScript", short: "JS", bg: "#F7DF1E", fg: "#111111" },
  { name: "React",   short: "⚛",   bg: "#0F1115", fg: "#61DAFB" },
  { name: "Node",    short: "N",   bg: "#3C873A", fg: "#FFFFFF" },
  { name: "MongoDB", short: "M",   bg: "#13AA52", fg: "#FFFFFF" },
  { name: "SQL",     short: "SQL", bg: "#00618A", fg: "#FFFFFF" },
  { name: "Tailwind",short: "TW",  bg: "#0EA5E9", fg: "#FFFFFF" },
  { name: "Bootstrap", short: "B", bg: "#7952B3", fg: "#FFFFFF" },
];

function StackRow() {
  return (
    <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
      <span className="font-serif text-base italic text-muted-foreground">My stack</span>
      <ul className="flex flex-wrap items-center gap-2">
        {stack.map((s) => (
          <li key={s.name} className="group relative">
            <span
              aria-label={s.name}
              style={{ backgroundColor: s.bg, color: s.fg }}
              className="flex size-9 items-center justify-center rounded-[9px] text-[12px] font-semibold tracking-tight ring-1 ring-foreground/10 shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-transform duration-200 ease-out group-hover:-translate-y-1"
            >
              {s.short}
            </span>
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              {s.name}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
    >
      <span className="font-mono text-foreground/40">{index}</span>
      <span className="h-px w-8 bg-foreground/15" />
      <span>{label}</span>
    </motion.div>
  );
}

const projects = [
  {
    n: "01",
    name: "Atlas",
    summary:
      "A focused task workspace built around keyboard-first interactions and quiet defaults.",
    stack: ["React", "Node", "MongoDB", "Tailwind"],
    image: project1,
    live: "#",
    repo: "#",
    year: "2025",
  },
  {
    n: "02",
    name: "Plement",
    summary:
      "A small e-commerce storefront for an independent leather brand — calm, photography-led, fast.",
    stack: ["Next.js", "Stripe", "TypeScript"],
    image: project2,
    live: "#",
    repo: "#",
    year: "2024",
  },
  {
    n: "03",
    name: "Signal",
    summary:
      "A lightweight analytics dashboard that turns noisy product data into one honest weekly read.",
    stack: ["React", "Express", "PostgreSQL"],
    image: project3,
    live: "#",
    repo: "#",
    year: "2024",
  },
];

const building = [
  { label: "Learning", value: "Distributed systems fundamentals" },
  { label: "Building", value: "A minimal writing app in Next.js" },
  { label: "Reading", value: "A Philosophy of Software Design" },
  { label: "Exploring", value: "LLM-assisted developer workflows" },
];

const timeline = [
  { year: "2021", title: "BSc Computer Science", body: "Started the degree that gave me my foundation in computing." },
  { year: "2022", title: "Fell in love with the web", body: "Moved from C and Java to HTML, CSS, and React." },
  { year: "2023", title: "Built MERN projects", body: "End-to-end apps with auth, databases, and real users." },
  { year: "2024", title: "BSc Completed", body: "Finished my undergraduate degree in Computer Science." },
  { year: "2024", title: "Started MCA", body: "Began postgraduate studies in Computer Applications." },
  { year: "2025", title: "Shipped production work", body: "Built polished, performant products while finishing my masters." },
  { year: "2026", title: "MCA Graduated", body: "Completed postgraduate studies and started looking for the right team." },
];

const obsessions = ["React", "Next.js", "TypeScript", "AI", "System Design"];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-serif text-lg italic tracking-tight">
            Dhanush S.
          </a>
          <StatusBadge />
        </div>
      </header>

      {/* Hero */}
      <Section id="top" className="pb-24 pt-10 md:pb-40 md:pt-20">
        <div className="grid grid-cols-12 gap-8">
          <motion.div variants={fadeUp} className="col-span-12 md:col-span-3">
            <div className="aspect-[3/4] w-40 overflow-hidden rounded-2xl bg-muted md:w-full">
              <img
                src={portrait}
                alt="Portrait of Dhanush S."
                width={768}
                height={1024}
                className="size-full object-cover"
              />
            </div>
            <div className="mt-5 space-y-1 text-xs text-muted-foreground">
              <p className="text-foreground">Dhanush S.</p>
              <p>MCA Graduate · MERN Developer</p>
              <p>Based in India</p>
            </div>
          </motion.div>

          <div className="col-span-12 md:col-span-9 md:pl-6">
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[2.6rem] leading-[1.05] tracking-tight md:text-[5.25rem]"
            >
              I build practical web products
              <span className="text-muted-foreground"> with clean code </span>
              and thoughtful design.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
            >
              I enjoy building fast web applications, learning new technologies,
              and turning ideas into products people actually use.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                View Work
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-foreground/40"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Currently Building */}
      <Section id="now" className="border-t border-foreground/10 py-24 md:py-32">
        <SectionLabel index="01" label="Currently Building" />
        <motion.h2
          variants={fadeUp}
          className="mb-12 max-w-3xl font-serif text-3xl leading-tight md:text-5xl"
        >
          A small, honest snapshot of what's on my desk right now.
        </motion.h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-foreground/10 md:grid-cols-2">
          {building.map((b) => (
            <motion.div
              key={b.label}
              variants={fadeUp}
              className="group bg-background p-8 transition hover:bg-card"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {b.label}
              </p>
              <p className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-3xl">
                {b.value}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work" className="border-t border-foreground/10 py-24 md:py-32">
        <SectionLabel index="02" label="Selected Work" />
        <motion.h2
          variants={fadeUp}
          className="mb-16 max-w-3xl font-serif text-3xl leading-tight md:text-5xl"
        >
          A few projects I've cared deeply about.
        </motion.h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              className="grid grid-cols-12 gap-6 md:gap-10"
            >
              <div className={`col-span-12 md:col-span-8 ${i % 2 ? "md:order-2" : ""}`}>
                <a
                  href={p.live}
                  className="group relative block overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10 transition hover:ring-foreground/30"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} project preview`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              </div>
              <div className="col-span-12 md:col-span-4 md:pt-4">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="font-mono text-foreground/40">{p.n}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-4 font-serif text-3xl tracking-tight md:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base">
                  {p.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-5 text-sm">
                  <a
                    href={p.live}
                    className="group inline-flex items-center gap-1.5 border-b border-foreground/30 pb-0.5 text-foreground transition hover:border-foreground"
                  >
                    Live demo
                    <span aria-hidden className="transition group-hover:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={p.repo}
                    className="group inline-flex items-center gap-1.5 border-b border-foreground/15 pb-0.5 text-muted-foreground transition hover:border-foreground/40 hover:text-foreground"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Obsessions */}
      <Section className="border-t border-foreground/10 py-24 md:py-32">
        <SectionLabel index="03" label="Right Now" />
        <motion.h2
          variants={fadeUp}
          className="max-w-4xl font-serif text-3xl leading-tight md:text-5xl"
        >
          What I'm obsessed with right now.
        </motion.h2>
        <motion.ul
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-2"
        >
          {obsessions.map((o) => (
            <li
              key={o}
              className="rounded-full border border-foreground/15 px-4 py-1.5 text-sm text-foreground/80 transition hover:-translate-y-0.5 hover:border-foreground/40 hover:text-foreground"
            >
              {o}
            </li>
          ))}
        </motion.ul>
      </Section>

      {/* Timeline */}
      <Section id="story" className="border-t border-foreground/10 py-24 md:py-32">
        <SectionLabel index="04" label="The Story So Far" />
        <div className="grid grid-cols-12 gap-8">
          <motion.h2
            variants={fadeUp}
            className="col-span-12 font-serif text-3xl leading-tight md:col-span-5 md:text-5xl"
          >
            Not a list of achievements. Just the path that got me here.
          </motion.h2>

          <div className="col-span-12 md:col-span-7">
            <ol className="relative border-l border-foreground/15">
              {timeline.map((t) => (
                <motion.li
                  key={t.year}
                  variants={fadeUp}
                  className="group relative pl-8 pb-10 last:pb-0"
                >
                  <span className="absolute left-[-5px] top-2 size-2.5 rounded-full bg-background ring-1 ring-foreground/40 transition group-hover:bg-foreground" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.year}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl leading-snug">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {t.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="border-t border-foreground/10 py-24 md:py-32">
        <SectionLabel index="05" label="About" />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <motion.p
              variants={fadeUp}
              className="font-serif text-2xl leading-[1.35] md:text-4xl"
            >
              I spent years learning, experimenting, starting over, and figuring out
              what kind of developer I wanted to become.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg"
            >
              Today I focus on building modern web applications with React, Node.js,
              Express and MongoDB. I care about typography, performance, and the quiet
              details that make software feel considered. I'm still learning every day —
              that part doesn't end.
            </motion.p>
            <StackRow />
          </div>
        </div>
      </Section>

      {/* Contact + Eyes */}
      <Section id="contact" className="border-t border-foreground/10 py-24 md:py-40">
        <SectionLabel index="06" label="Contact" />

        <div className="grid grid-cols-12 items-start gap-10">
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl leading-[1.05] tracking-tight md:text-7xl"
            >
              Let's connect.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg"
            >
              I'm always open to discussing ideas, projects, opportunities, and
              technology.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
              {[
                { label: "Email", value: "hello@dhanush.dev", href: "mailto:hello@dhanush.dev" },
                { label: "LinkedIn", value: "in/dhanush-s", href: "#" },
                { label: "GitHub", value: "@dhanush-s", href: "#" },
                { label: "Resume", value: "Download PDF", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group flex items-center justify-between py-5 transition hover:pl-2"
                  >
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {l.label}
                    </span>
                    <span className="flex items-center gap-3 font-serif text-xl md:text-2xl">
                      {l.value}
                      <span
                        aria-hidden
                        className="text-base text-foreground/40 transition group-hover:translate-x-0.5 group-hover:text-foreground"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

        </div>
      </Section>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Dhanush S. Made with care.</p>
          <p className="font-mono">India · Available worldwide</p>
        </div>
      </footer>
    </main>
  );
}
