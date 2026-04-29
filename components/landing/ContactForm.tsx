'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = ['Datos personales', 'Tu empresa', 'Tu necesidad'];

export default function ContactForm() {
  const [step, setStep] = useState(0);

  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-3">Hablemos</h2>
        <p className="text-white/50 text-center mb-10">Cuéntanos tu reto. Respondemos en menos de 24h.</p>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1">
              <div className={`h-1 w-full rounded-full transition-colors duration-300 ${i <= step ? 'bg-electric' : 'bg-white/10'}`} />
              <span className={`text-xs ${i === step ? 'text-electric' : 'text-white/30'}`}>{label}</span>
            </div>
          ))}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {step === 0 && (
              <>
                <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-electric" placeholder="Nombre completo" />
                <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-electric" placeholder="Email corporativo" type="email" />
              </>
            )}
            {step === 1 && (
              <>
                <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-electric" placeholder="Nombre de la empresa" />
                <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-electric" placeholder="Sector / Industria" />
              </>
            )}
            {step === 2 && (
              <textarea className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-electric h-32 resize-none" placeholder="Describe tu reto o necesidad..." />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} className="flex-1 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-medium">
              Anterior
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button onClick={() => setStep(s => s + 1)} className="flex-1 py-3 bg-electric text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Siguiente
            </button>
          ) : (
            <button disabled className="flex-1 py-3 bg-electric/50 text-white/50 rounded-lg font-semibold cursor-not-allowed opacity-50">
              Enviar (Fase 2)
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
