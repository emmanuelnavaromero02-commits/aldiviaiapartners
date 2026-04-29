import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: 'eu-south-1' });

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, industry, message } = await req.json();

    const fromEmail = process.env.SES_FROM_EMAIL;
    const toEmail = process.env.SES_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error('SES emails not configured');
      return NextResponse.json({ ok: true });
    }

    await ses.send(new SendEmailCommand({
      Source: fromEmail,
      Destination: { ToAddresses: [toEmail] },
      Message: {
        Subject: { Data: `Nuevo lead ValdiviIA: ${name} — ${company}` },
        Body: {
          Html: {
            Data: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #0D1B2A; padding: 24px; border-radius: 12px 12px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo Lead ValdiviIA</h1>
                </div>
                <div style="background: #F7F9FC; padding: 24px; border-radius: 0 0 12px 12px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nombre</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Empresa</td><td style="padding: 8px 0;">${company || '—'}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666;">Industria</td><td style="padding: 8px 0;">${industry || '—'}</td></tr>
                    <tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Mensaje</td><td style="padding: 8px 0;">${message}</td></tr>
                  </table>
                  <div style="margin-top: 20px; padding: 16px; background: #0057FF10; border-radius: 8px; border-left: 4px solid #0057FF;">
                    <p style="margin: 0; color: #0057FF; font-weight: bold;">Responder en menos de 24 horas</p>
                  </div>
                </div>
              </div>
            `,
          },
        },
      },
    }));

    await ses.send(new SendEmailCommand({
      Source: fromEmail,
      Destination: { ToAddresses: [email] },
      Message: {
        Subject: { Data: 'Recibimos tu mensaje — ValdiviIA Partners' },
        Body: {
          Html: {
            Data: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #0D1B2A; padding: 24px; border-radius: 12px 12px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 20px;">Valdivi<span style="color: #0057FF">IA</span> Partners</h1>
                </div>
                <div style="background: #F7F9FC; padding: 24px; border-radius: 0 0 12px 12px;">
                  <p style="font-size: 16px;">Hola <strong>${name}</strong>,</p>
                  <p>Recibimos tu mensaje y un asesor de ValdiviIA te contactará en menos de 24 horas.</p>
                  <p style="font-style: italic; color: #666;">"No automatizamos decisiones, las dirigimos."</p>
                  <a href="https://valdiviaiapartners-sap.ai/agendar" style="display: inline-block; margin-top: 16px; padding: 12px 24px; background: #0057FF; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">
                    Agendar consultoría gratuita
                  </a>
                </div>
              </div>
            `,
          },
        },
      },
    }));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[/api/notify-lead] Error:', err);
    return NextResponse.json({ ok: true });
  }
}
