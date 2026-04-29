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

      {/* Client Links Section */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-16">
        {CLIENTS.map((client) => (
          <a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold transition-colors cursor-pointer ${
              client.weight === 2
                ? 'text-gray-400 hover:text-navy text-2xl md:text-3xl tracking-tight'
                : 'text-gray-300 hover:text-electric text-lg'
            }`}
          >
            {client.name}
          </a>
        ))}
      </div>

      {/* Metrics Section */}
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
