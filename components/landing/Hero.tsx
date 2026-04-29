'use client';
import { motion } from 'framer-motion';

export default function Hero({ onOpenVideo }: { onOpenVideo: () => void }) {
  const words = ['No', 'automatizamos', 'decisiones,', 'las', 'dirigimos.'];

  return (
    <section className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">
          Consultoría SAP + IA para empresas que lideran
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Convertimos inteligencia en dirección estratégica, respaldada por mentes expertas.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            Ver Soluciones
          </button>
          <button
            onClick={onOpenVideo}
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            ▶ Agendar Asesoría
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        onClick={onOpenVideo}
        className="mt-16 w-full max-w-3xl aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group"
      >
        <div className="flex flex-col items-center gap-3 text-white/50 group-hover:text-white/80 transition-colors">
          <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center text-2xl">▶</div>
          <span className="text-sm font-medium">Ver cómo trabajamos</span>
        </div>
      </motion.div>
    </section>
  );
}
