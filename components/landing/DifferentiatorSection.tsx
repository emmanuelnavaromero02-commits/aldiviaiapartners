'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PILLARS = [
  {
    num: '01',
    title: 'Criterio humano en cada decisión',
    desc: 'Mientras otros confían ciegamente en algoritmos, nosotros mantenemos expertos con 20+ años de experiencia validando cada resultado. La IA propone, el experto decide.',
    stat: '100%',
    statLabel: 'decisiones validadas por expertos',
  },
  {
    num: '02',
    title: 'Resultados garantizados por contrato',
    desc: 'No prometemos tecnología, prometemos ROI. Cada proyecto incluye métricas de éxito definidas antes de empezar y garantía de resultados en el contrato de servicios.',
    stat: '3x',
    statLabel: 'ROI promedio en 12 meses',
  },
  {
    num: '03',
    title: 'Infraestructura enterprise nativa',
    desc: 'Construimos sobre AWS con arquitectura de nivel bancario. DynamoDB, Redis, IAM roles, y cifrado AES-256. Tu operación crítica merece infraestructura crítica.',
    stat: '99.9%',
    statLabel: 'uptime garantizado en producción',
  },
  {
    num: '04',
    title: 'Integración SAP profunda',
    desc: 'No somos generalistas de IA. Somos especialistas SAP que dominan S/4HANA, ECC, BTP, IBP y todos los módulos críticos. La diferencia se nota desde el día uno.',
    stat: '20+',
    statLabel: 'años de expertise SAP',
  },
];

export default function DifferentiatorSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6" style={{ background: '#FAF7F2' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3">Nuestro diferencial</p>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
            No es solo IA.<br />
            <span className="text-electric">Es inteligencia dirigida.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Mientras otros automatizan sin control, nosotros combinamos IA con criterio humano para garantizar resultados que puedes medir, defender y escalar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-black text-gray-100 group-hover:text-electric/20 transition-colors">{p.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy mb-3">{p.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-electric">{p.stat}</span>
                    <span className="text-sm text-gray-400">{p.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
