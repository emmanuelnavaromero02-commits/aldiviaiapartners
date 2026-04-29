'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { METRICS, CLIENTS } from '@/lib/constants';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (1800 / 16));
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
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        Empresas que confían en la dirección inteligente
      </p>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4 mb-14">
        {CLIENTS.map((client) => (
          <span key={client} className="text-gray-400 font-bold text-sm hover:text-navy transition-colors cursor-default">
            {client}
          </span>
        ))}
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
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
