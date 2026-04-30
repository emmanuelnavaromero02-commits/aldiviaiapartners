'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Consultoría Enterprise Nivel SAP
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-dark mb-6 leading-tight">
              SAP + Inteligencia <br className="hidden lg:block"/>
              Artificial Estratégica
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              <span className="font-medium text-gray-900">IA que propone. Expertos humanos que deciden.</span><br/>
              Optimizamos tu ecosistema SAP con agentes de IA supervisados, generando resultados medibles en finanzas, operaciones y supply chain con control total.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white text-base h-14 px-8">
                Agendar Consultoría Estratégica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 h-14 px-8">
                <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                Ver casos de éxito reales
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-dark to-slate-800 shadow-2xl border border-gray-800 overflow-hidden relative">
              {/* Abstract Tech Graphic placeholder */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-white/50 text-xs font-mono">SAP S/4HANA AI INTEGRATION</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                  <div className="h-4 w-5/6 bg-white/10 rounded"></div>
                  <div className="flex gap-4 pt-4">
                    <div className="h-20 w-1/3 bg-primary/20 border border-primary/30 rounded-lg"></div>
                    <div className="h-20 w-2/3 bg-white/5 border border-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">100%</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Validación Humana</p>
                <p className="text-xs text-gray-500">Decisiones seguras</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}