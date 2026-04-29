'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROISimulator() {
  const [employees, setEmployees] = useState(50);
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(25);

  const weeklyHours = employees * hours;
  const annualCostWithout = weeklyHours * 52 * rate;
  const annualCostWith = annualCostWithout * 0.30;
  const savings = annualCostWithout - annualCostWith;
  const roi = Math.round((savings / (employees * 1200)) * 100);
  const months = Math.round((employees * 1200) / (savings / 12));

  const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-electric mb-3">
          Simulador de ahorro
        </p>
        <h2 className="text-4xl font-black text-navy text-center mb-4">
          ¿Cuánto pierdes sin IA?
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Ajusta los parámetros de tu empresa y descubre el impacto real en tu operación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-navy">Empleados en procesos manuales</label>
                <span className="text-electric font-bold">{employees}</span>
              </div>
              <input type="range" min="5" max="500" step="5" value={employees}
                onChange={e => setEmployees(+e.target.value)}
                className="w-full accent-electric" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-navy">Horas semanales en procesos</label>
                <span className="text-electric font-bold">{hours}h</span>
              </div>
              <input type="range" min="1" max="40" step="1" value={hours}
                onChange={e => setHours(+e.target.value)}
                className="w-full accent-electric" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-navy">Costo promedio por hora (USD)</label>
                <span className="text-electric font-bold">${rate}</span>
              </div>
              <input type="range" min="10" max="150" step="5" value={rate}
                onChange={e => setRate(+e.target.value)}
                className="w-full accent-electric" />
            </div>
          </div>

          <div className="space-y-4">
            <motion.div
              key={annualCostWithout}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              className="bg-red-50 border border-red-100 rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-1">Sin IA — costo anual</p>
              <p className="text-3xl font-black text-red-600">{fmt(annualCostWithout)}</p>
            </motion.div>

            <motion.div
              key={annualCostWith}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              className="bg-green-50 border border-green-100 rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-1">Con ValdiviIA — costo anual</p>
              <p className="text-3xl font-black text-green-600">{fmt(annualCostWith)}</p>
            </motion.div>

            <motion.div
              key={savings}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              className="bg-navy rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-electric mb-1">Ahorro anual estimado</p>
              <p className="text-3xl font-black text-white">{fmt(savings)}</p>
              <p className="text-white/50 text-sm mt-1">ROI estimado: {roi}% · Recuperación en {months} meses</p>
            </motion.div>

            <button className="w-full py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
              Solicitar análisis personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
