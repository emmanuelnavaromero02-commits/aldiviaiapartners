'use client';
import { motion } from 'framer-motion';
import { Bot, UserCheck, ArrowRight, ShieldAlert, Cpu, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Differentiator() {
  return (
    <section className="py-24 bg-neutral-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Nuestro enfoque único</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">No automatizamos decisiones.<br/>Las dirigimos.</h2>
          <p className="text-gray-400 text-lg">
            La inteligencia artificial pura genera riesgos en entornos enterprise. Nosotros combinamos la velocidad de la IA con el criterio de tus expertos SAP.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto mb-20 relative">

          {/* Arrow connector for desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white rounded-full items-center justify-center shadow-2xl text-neutral-dark">
            <ArrowRight size={24} />
          </div>

          {/* Left Column - IA Sola */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex-1 bg-white/5 border border-red-500/20 rounded-3xl p-8 lg:p-12 backdrop-blur-sm"
          >
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 text-red-400">
              <Bot size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">IA Tradicional</h3>
            <p className="text-red-400/80 text-sm font-medium mb-8">Propuestas rápidas, sin contexto de negocio.</p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <ShieldAlert className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                <span>Riesgo de &quot;alucinaciones&quot; en datos financieros críticos.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <ShieldAlert className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                <span>Desconexión de las reglas de negocio de SAP.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <ShieldAlert className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                <span>Falta de auditoría en la toma de decisiones.</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column - ValdiviIA */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex-1 bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <UserCheck size={120} />
            </div>

            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary relative z-10">
              <UserCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">El enfoque ValdiviIA</h3>
            <p className="text-primary-100 text-sm font-medium mb-8 relative z-10 text-blue-200">IA + Validación experta SAP = Decisiones seguras.</p>

            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>El humano revisa, ajusta y aprueba el borrador de la IA.</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Integración nativa respetando la gobernanza de SAP.</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Trazabilidad completa para auditoría y compliance.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-8 border-t border-white/10">
          <div className="p-6">
            <UserCheck className="text-accent w-8 h-8 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Control Humano</h4>
            <p className="text-sm text-gray-400">El experto de negocio tiene siempre la última palabra antes de ejecutar en SAP.</p>
          </div>
          <div className="p-6">
            <ShieldCheck className="text-accent w-8 h-8 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Gobernanza SAP</h4>
            <p className="text-sm text-gray-400">Respetamos roles, perfiles y flujos de aprobación estándar del ERP.</p>
          </div>
          <div className="p-6">
            <TrendingUp className="text-accent w-8 h-8 mb-4" />
            <h4 className="font-semibold text-lg mb-2">ROI Garantizado</h4>
            <p className="text-sm text-gray-400">Casos de uso medibles que impactan directamente en reducción de costos o aumento de ingresos.</p>
          </div>
          <div className="p-6">
            <Cpu className="text-accent w-8 h-8 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Arquitectura Escalable</h4>
            <p className="text-sm text-gray-400">Despliegue seguro en SAP BTP o AWS según tu estrategia cloud actual.</p>
          </div>
        </div>

      </div>
    </section>
  );
}