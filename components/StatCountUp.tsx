"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCountUp({
  target,
  decimals = 0,
  durationMs = 1400,
}: {
  target: number;
  decimals?: number;
  durationMs?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const from = 0;
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(from + (target - from) * eased);
            if (t < 1) requestAnimationFrame(step);
            else setValue(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toString();

  return <span ref={ref}>{formatted}</span>;
}
