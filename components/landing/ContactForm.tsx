'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = ['Datos personales', 'Tu empresa', 'Tu necesidad'];

type FormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error' | 'ratelimit';

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [retryAfter, setRetryAfter] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', industry: '', message: '',
  });

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const canAdvance = () => {
    if (step === 0) return form.name.trim() !== '' && form.email.trim() !== '';
    if (step === 1) return form.company.trim() !== '';
    if (step === 2) return form.message.trim() !== '';
    return false;
  };

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status === 429) {
        setStatus('ratelimit');
        setRetryAfter(data.retryAfter ?? 60);
        return;
      }
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error ?? 'Error inesperado.');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('No se pudo conectar con el servidor.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-electric transition-colors';

  if (status === 'success') {
    return (
      <section className="bg-navy py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6 text-success text-3xl">✓</div>
          <h2 className="text-3xl font-black text-white mb-3">Mensaje enviado</h2>
          <p className="text-white/50">Nuestro equipo te contactará en menos de 24 horas.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-3">Hablemos</h2>
        <p className="text-white/50 text-center mb-10">Cuéntanos tu reto. Respondemos en menos de 24h.</p>

        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1">
              <div className={`h-1 w-full rounded-full transition-colors duration-300 ${i <= step ? 'bg-electric' : 'bg-white/10'}`} />
              <span className={`text-xs ${i === step ? 'text-electric' : 'text-white/30'}`}>{label}</span>
            </div>
          ))}
        </div>

        {status === 'ratelimit' && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
            <span>⏱</span>
            <span>Demasiados intentos. Vuelve a intentarlo en <strong>{retryAfter}s</strong>.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {errorMsg}
          </div>
        )}

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
                <input className={inputClass} placeholder="Nombre completo" value={form.name} onChange={update('name')} />
                <input className={inputClass} placeholder="Email corporativo" type="email" value={form.email} onChange={update('email')} />
              </>
            )}
            {step === 1 && (
              <>
                <input className={inputClass} placeholder="Nombre de la empresa" value={form.company} onChange={update('company')} />
                <input className={inputClass} placeholder="Sector / Industria" value={form.industry} onChange={update('industry')} />
              </>
            )}
            {step === 2 && (
              <textarea className={`${inputClass} h-32 resize-none`} placeholder="Describe tu reto o necesidad..." value={form.message} onChange={update('message')} />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          {step > 0 && (
            <button
              onClick={() => { setStep(s => s - 1); setStatus('idle'); }}
              className="flex-1 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-medium"
            >
              Anterior
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={!canAdvance()}
              className="flex-1 py-3 bg-electric text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canAdvance() || status === 'loading' || status === 'ratelimit'}
              className="flex-1 py-3 bg-electric text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
