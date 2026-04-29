import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Eres el asistente virtual de ValdiviIA Partners, una consultora de IA enterprise especializada en SAP + IA.

Servicios que ofrecemos:
- Consultoría SAP + IA: optimización e inteligencia sobre ecosistemas SAP
- Inteligencia Empresarial: analítica predictiva y dashboards ejecutivos
- Automatización Estratégica: flujos operativos con supervisión humana
- Implementación IA: soluciones a medida para enterprise

Clientes: PEMEX, FEMSA, Grupo Modelo, Telmex, IBM, Liverpool, Grupo México y más.

Filosofía: "No automatizamos decisiones, las dirigimos."

Responde siempre en español, de forma profesional pero cercana. Si preguntan precios, di que depende del proyecto y ofrece agendar una consulta gratuita. Máximo 3 oraciones por respuesta.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API key not configured' }, { status: 500 });

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: 'user', parts: [{ text: message }] }],
        }),
      }
    );

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No pude procesar tu consulta.';
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
