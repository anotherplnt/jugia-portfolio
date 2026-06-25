export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // ponytail: pure CSS scroll-reveal, zero JS. The `reveal` class animates via
  // animation-timeline: view() where supported. Default state is VISIBLE
  // (opacity:1) — the @supports rule in globals.css only hides+animates when
  // scroll-driven animations are available. No JS, no IO, no hydration = can
  // never stay stuck at opacity:0 (the bug that blanked sections twice before).
  return <div className={`reveal ${className}`}>{children}</div>;
}
