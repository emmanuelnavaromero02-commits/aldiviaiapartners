import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

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
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 });

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      model: 'llama3-8b-8192',
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
