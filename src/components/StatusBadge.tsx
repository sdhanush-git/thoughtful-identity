import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StatusBadge() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-medium tracking-tight text-foreground/80 backdrop-blur transition hover:border-foreground/20 hover:text-foreground"
        aria-expanded={open}
      >
        <span className="relative inline-flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Available for opportunities
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-[calc(100%+8px)] w-56 rounded-2xl border border-foreground/10 bg-background p-4 text-xs shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
          >
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Open to
            </p>
            <ul className="space-y-1.5 text-foreground/80">
              <li>— Frontend Engineering</li>
              <li>— MERN Development</li>
              <li>— Full Stack Roles</li>
              <li>— Freelance Projects</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}