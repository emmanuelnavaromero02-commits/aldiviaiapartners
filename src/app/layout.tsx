import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'ValdiviIA Partners — Consultoría SAP + IA Enterprise',
    template: '%s | ValdiviIA Partners',
  },
  description: 'Consultoría líder en SAP + Inteligencia Artificial para empresas enterprise en México, LATAM, USA y Europa. No automatizamos decisiones, las dirigimos. +20 años de experiencia. PEMEX, FEMSA, IBM, Grupo Modelo.',
  keywords: ['SAP', 'Inteligencia Artificial', 'consultoría SAP', 'IA enterprise', 'SAP S/4HANA', 'transformación digital', 'automatización', 'PEMEX', 'FEMSA', 'IBM', 'México', 'LATAM'],
  authors: [{ name: 'Rodolfo Valdivia', url: 'https://valdiviaiapartners-sap.ai' }],
  creator: 'ValdiviIA Partners',
  publisher: 'ValdiviIA Partners',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://valdiviaiapartners-sap.ai',
    siteName: 'ValdiviIA Partners',
    title: 'ValdiviIA Partners — Consultoría SAP + IA Enterprise',
    description: 'No automatizamos decisiones, las dirigimos. IA con criterio humano para empresas enterprise.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValdiviIA Partners — SAP + IA Enterprise',
    description: 'No automatizamos decisiones, las dirigimos.',
    creator: '@valdiviaIA',
  },
  alternates: {
    canonical: 'https://valdiviaiapartners-sap.ai',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
