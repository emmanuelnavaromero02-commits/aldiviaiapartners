import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

type IncomingMessage = { role?: string; text?: string; content?: string };

const SYSTEM_PROMPT = `Eres el asistente virtual de ValdiviIA Partners, una consultora de IA enterprise especializada en SAP + IA.
Servicios:
- Consultoría SAP + IA: optimización inteligente sobre SAP.
- Inteligencia Empresarial: analítica predictiva.
- Automatización Estratégica: flujos con supervisión humana.
- Implementación IA: soluciones enterprise.
Clientes reales: PEMEX, FEMSA, IBM, Telmex, etc.
Filosofía: "No automatizamos decisiones, las dirigimos."
Responde en español, de forma profesional, directa y concisa (máximo 3 oraciones por respuesta).`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();
    if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 });
    if (!process.env.GROQ_API_KEY) return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const historyMessages = Array.isArray(history)
      ? history
          .filter((m: IncomingMessage) => (m.text || m.content) && (m.role === 'user' || m.role === 'assistant'))
          .map((m: IncomingMessage) => ({
            role: m.role as 'user' | 'assistant',
            content: String(m.text ?? m.content),
          }))
      : [];

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...historyMessages,
        { role: 'user', content: String(message) }
      ],
      model: 'llama-3.1-8b-instant',
      temperature: 0.7,
      max_tokens: 200,
    });

    const reply = completion.choices[0]?.message?.content || 'Hubo un error al procesar tu consulta.';
    return NextResponse.json({ reply });

  } catch (error: unknown) {
    console.error('Groq API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
