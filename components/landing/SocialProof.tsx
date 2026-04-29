'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { METRICS } from '@/lib/constants';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl font-black text-navy">
      {count}{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-surface py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {METRICS.map((m) => (
          <div key={m.label}>
            <Counter target={m.value} suffix={m.suffix} />
            <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-widest">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
