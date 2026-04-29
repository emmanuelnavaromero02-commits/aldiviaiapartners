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
  title: 'ValdiviIA Partners — Consultoría SAP + IA Enterprise',
  description: 'No automatizamos decisiones, las dirigimos. Inteligencia artificial con respaldo humano real para empresas enterprise.',
  keywords: 'SAP, IA, inteligencia artificial, consultoría, enterprise, automatización, PEMEX, FEMSA',
  openGraph: {
    title: 'ValdiviIA Partners',
    description: 'No automatizamos decisiones, las dirigimos.',
    type: 'website',
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
