import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Eye({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = mouse.x - cx;
    const dy = mouse.y - cy;
    const dist = Math.min(Math.hypot(dx, dy), 200);
    const max = rect.width * 0.18;
    const scale = (dist / 200) * max;
    const a = Math.atan2(dy, dx);
    setAngle({ x: Math.cos(a) * scale, y: Math.sin(a) * scale });
  }, [mouse]);

  useEffect(() => {
    const id = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 4200 + Math.random() * 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={ref}
      className="relative size-32 rounded-full bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-foreground/10 overflow-hidden md:size-44"
    >
      <motion.div
        animate={{
          scaleY: blink ? 0.05 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ x: angle.x, y: angle.y }}
          transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.55 }}
          className="size-4 rounded-full bg-foreground shadow-[0_1px_2px_rgba(0,0,0,0.12)] md:size-5"
        />
      </motion.div>
    </div>
  );
}

export function FollowingEyes() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="flex items-center justify-center gap-6 md:gap-10" aria-hidden>
      <Eye mouse={mouse} />
      <Eye mouse={mouse} />
    </div>
  );
}