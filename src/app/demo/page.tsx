'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Send, Users, DollarSign, Settings, Zap, ChevronRight, AlertCircle } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; text: string };
type Module = 'RRHH' | 'Finanzas' | 'Operaciones';

const MODULES = [
  { id: 'RRHH' as Module, label: 'Recursos Humanos', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { id: 'Finanzas' as Module, label: 'Finanzas', icon: DollarSign, color: 'text-green-400', bg: 'bg-green-500/20' },
  { id: 'Operaciones' as Module, label: 'Operaciones', icon: Settings, color: 'text-amber-400', bg: 'bg-amber-500/20' },
];

const QUICK_ACTIONS: Record<Module, string[]> = {
  RRHH: [
    '¿Cuántos empleados activos hay por departamento?',
    '¿Cuál es la rotación de personal este trimestre?',
    'Muéstrame el resumen de nómina mensual',
    '¿Cuántas vacantes tenemos abiertas?',
    'Analiza la distribución por género y edad',
    '¿Cuál es el ausentismo actual vs meta?',
  ],
  Finanzas: [
    '¿Cómo van los ingresos vs el año pasado?',
    'Muéstrame el P&L del Q1 2025',
    '¿Cuál es nuestro EBITDA y margen actual?',
    'Analiza las cuentas por cobrar',
    '¿Cómo vamos vs presupuesto anual?',
    'Resumen de posición de efectivo',
  ],
  Operaciones: [
    '¿Cuál es la eficiencia productiva actual?',
    'Muéstrame los paros no programados del Q1',
    '¿Cómo está el OEE por planta?',
    'Analiza los proveedores críticos',
    '¿Cuál es el costo de los paros este trimestre?',
    'Estado del mantenimiento preventivo',
  ],
};

const WELCOME: Record<Module, string> = {
  RRHH: '¡Hola! Soy el Copiloto SAP de ValdiviIA, módulo de Recursos Humanos. Tengo acceso en tiempo real a los datos de tus 1,248 colaboradores. ¿Qué necesitas analizar?',
  Finanzas: '¡Hola! Soy el Copiloto SAP de ValdiviIA, módulo Financiero. Tengo acceso a P&L, presupuesto, cuentas por cobrar y toda la posición financiera de la empresa. ¿Qué analizamos?',
  Operaciones: '¡Hola! Soy el Copiloto SAP de ValdiviIA, módulo de Operaciones. Monitoreo tus 5 plantas, eficiencia productiva, mantenimiento y proveedores en tiempo real. ¿Qué revisamos?',
};

export default function DemoPage() {
  const [activeModule, setActiveModule] = useState<Module>('RRHH');
  const [messages, setMessages] = useState<Record<Module, Message[]>>({
    RRHH: [{ role: 'assistant', text: WELCOME.RRHH }],
    Finanzas: [{ role: 'assistant', text: WELCOME.Finanzas }],
    Operaciones: [{ role: 'assistant', text: WELCOME.Operaciones }],
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeModule]);

  const send = async (text?: string) => {
    const userMsg = text ?? input.trim();
    if (!userMsg || loading) return;
    setInput('');

    const currentHistory = messages[activeModule];
    const newMessages = { ...messages, [activeModule]: [...currentHistory, { role: 'user' as const, text: userMsg }] };
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          history: currentHistory,
          module: activeModule,
        }),
      });
      const data = await res.json();
      setMessages(prev => ({
        ...prev,
        [activeModule]: [...prev[activeModule], { role: 'assistant', text: data.reply ?? 'Error al procesar.' }],
      }));
    } catch {
      setMessages(prev => ({
        ...prev,
        [activeModule]: [...prev[activeModule], { role: 'assistant', text: 'Error de conexión. Intenta de nuevo.' }],
      }));
    } finally {
      setLoading(false);
    }
  };

  const currentModule = MODULES.find(m => m.id === activeModule)!;
  const Icon = currentModule.icon;

  return (
    <main className="min-h-screen bg-navy pt-16">
      {/* Header banner */}
      <div className="bg-electric/10 border-b border-electric/20 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap size={16} className="text-electric" />
            <p className="text-electric text-sm font-semibold">
              Estás experimentando el <strong>1% del poder</strong> de ValdiviIA SAP Copilot
            </p>
          </div>
          <Link href="/agendar" className="text-xs px-4 py-2 bg-electric text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors hidden md:block">
            Ver demo completa →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-2">Demo interactiva</p>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Copiloto SAP + IA en acción
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Consulta datos de RRHH, Finanzas y Operaciones en lenguaje natural. Datos ficticios de empresa demo.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-6 max-w-2xl mx-auto">
          <AlertCircle size={14} className="text-white/40 flex-shrink-0" />
          <p className="text-white/40 text-xs">Empresa ficticia: Corporativo Industrias MX S.A. de C.V. · Datos de ejemplo · Solo para demostración</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Module selector */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Módulos SAP</p>
              <div className="space-y-2">
                {MODULES.map((mod) => {
                  const ModIcon = mod.icon;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setActiveModule(mod.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeModule === mod.id
                          ? 'bg-electric text-white'
                          : 'text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <ModIcon size={16} />
                      <span className="text-sm font-semibold">{mod.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Consultas rápidas</p>
              <div className="space-y-1">
                {QUICK_ACTIONS[activeModule].map((action) => (
                  <button
                    key={action}
                    onClick={() => send(action)}
                    disabled={loading}
                    className="w-full text-left text-xs text-white/50 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors flex items-start gap-2"
                  >
                    <ChevronRight size={12} className="flex-shrink-0 mt-0.5" />
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main console */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col" style={{ height: '600px' }}>
              {/* Console header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${currentModule.bg}`}>
                  <Icon size={16} className={currentModule.color} />
                </div>
                <div>
                  <p className="text-white font-black text-sm">{currentModule.label}</p>
                  <p className="text-white/40 text-xs">Corporativo Industrias MX · SAP S/4HANA</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">En línea</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {messages[activeModule].map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-electric text-white rounded-br-sm'
                          : 'bg-white/10 text-white/90 rounded-bl-sm'
                      }`}>
                        <pre className="whitespace-pre-wrap font-sans">{m.text}</pre>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-1">
                        {[0, 150, 300].map((delay) => (
                          <span key={delay} className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-3">
                  <input
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric transition-colors"
                    placeholder={`Pregunta sobre ${currentModule.label}...`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && send()}
                  />
                  <button
                    onClick={() => send()}
                    disabled={loading || !input.trim()}
                    className="px-4 py-3 bg-electric text-white rounded-xl hover:bg-blue-600 disabled:opacity-40 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA below console */}
            <div className="mt-6 bg-electric/10 border border-electric/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-black">¿Quieres esto en tu empresa?</p>
                <p className="text-white/50 text-sm">La demo completa incluye todos tus datos reales de SAP, reportes automáticos y alertas inteligentes.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link href="/contacto" className="px-5 py-3 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Contactar
                </Link>
                <Link href="/agendar" className="px-5 py-3 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                  Agendar demo real →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
