'use client';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const STATS = [
  { value: 200, suffix: '+', label: 'Proyectos completados' },
  { value: 50, suffix: '+', label: 'Clientes enterprise' },
  { value: 12, suffix: '+', label: 'Países de operación' },
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / (1800 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="py-16 px-6" style={{ background: '#0D1B2A' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-electric mb-2">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
