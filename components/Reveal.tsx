"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [forced, setForced] = useState(false);

  // ponytail: fallback — if inView never fires (hydration race / above-fold),
  // force-show after 700ms so content can NEVER stay stuck at opacity:0 in prod.
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 700);
    return () => clearTimeout(t);
  }, []);

  const show = inView || forced;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
