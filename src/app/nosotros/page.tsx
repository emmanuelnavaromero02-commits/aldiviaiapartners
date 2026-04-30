import Link from 'next/link';

const TEAM = [
  {
    name: 'Rodolfo Valdivia',
    role: 'Fundador & Director General',
    bio: 'Más de 20 años liderando transformaciones digitales en empresas Fortune 500 de México y LATAM. Especialista en SAP, inteligencia artificial aplicada y dirección estratégica empresarial.',
    expertise: ['SAP S/4HANA', 'IA Estratégica', 'Transformación Digital', 'Dirección Ejecutiva'],
  },
];

const VALUES = [
  { title: 'Criterio Humano', desc: 'Cada decisión estratégica está respaldada por expertos con décadas de experiencia en el campo.' },
  { title: 'Resultados Medibles', desc: 'No prometemos tecnología. Prometemos resultados concretos, medibles y verificables.' },
  { title: 'Presencia Global', desc: 'Operamos en México, LATAM, Estados Unidos y Europa con socios estratégicos en cada región.' },
  { title: 'Excelencia Técnica', desc: 'Nuestro equipo concentra más de 20 años de experiencia en SAP e inteligencia artificial enterprise.' },
];

const MILESTONES = [
  { year: '2004', event: 'Inicio de operaciones en consultoría SAP para grandes corporativos mexicanos.' },
  { year: '2012', event: 'Expansión a mercados de LATAM con proyectos en 8 países de la región.' },
  { year: '2018', event: 'Incorporación de capacidades de Inteligencia Artificial sobre ecosistemas SAP.' },
  { year: '2021', event: 'Alianzas estratégicas con AWS, Microsoft y OpenAI para soluciones enterprise.' },
  { year: '2024', event: 'Lanzamiento de ValdiviIA Partners — la evolución hacia IA con criterio humano.' },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Quiénes somos</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Inteligencia que dirige.<br />
            <span className="text-electric">Expertos que garantizan.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            ValdiviIA Partners nació de una convicción: la inteligencia artificial solo genera valor real cuando está dirigida por mentes expertas con criterio estratégico.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3">Nuestra misión</p>
            <h2 className="text-3xl font-black text-navy mb-6">No automatizamos decisiones, las dirigimos.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Somos una consultora global de Inteligencia Artificial y SAP con presencia en México, LATAM, Estados Unidos y Europa. Contamos con los mejores expertos de la industria — profesionales con más de 20 años de experiencia en proyectos de transformación digital para empresas líderes en sus sectores.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nuestra propuesta es única: combinamos la potencia de la inteligencia artificial más avanzada con el criterio humano de consultores expertos para garantizar resultados concretos, medibles y sostenibles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mientras otros implementan tecnología, nosotros dirigimos transformaciones. La diferencia está en el criterio, la experiencia y la responsabilidad de cada decisión que tomamos junto a nuestros clientes.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { label: 'Años de experiencia', value: '20+' },
              { label: 'Clientes enterprise', value: '50+' },
              { label: 'Países de operación', value: '12+' },
              { label: 'Proyectos exitosos', value: '200+' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="text-4xl font-black text-electric">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-electric text-xs font-semibold uppercase tracking-widest mb-3">Nuestros principios</p>
          <h2 className="text-3xl font-black text-navy text-center mb-14">Lo que nos diferencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-black text-navy mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-electric text-xs font-semibold uppercase tracking-widest mb-3">Liderazgo</p>
          <h2 className="text-3xl font-black text-navy text-center mb-14">Dirección que inspira confianza</h2>
          {TEAM.map((member) => (
            <div key={member.name} className="bg-white rounded-3xl p-10 border border-gray-100 max-w-2xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">RV</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-navy">{member.name}</h3>
                  <p className="text-electric font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((e) => (
                      <span key={e} className="px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-electric text-xs font-semibold uppercase tracking-widest mb-3">Historia</p>
          <h2 className="text-3xl font-black text-navy text-center mb-14">Dos décadas de liderazgo</h2>
          <div className="space-y-0">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-black">{m.year}</span>
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 my-2" />}
                </div>
                <div className="pb-10">
                  <p className="text-gray-700 leading-relaxed pt-3">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="text-white/60 mb-8">Agenda una consulta gratuita con nuestro equipo directivo.</p>
          <Link href="/agendar" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Agendar consultoría gratuita
          </Link>
        </div>
      </div>
    </main>
  );
}
