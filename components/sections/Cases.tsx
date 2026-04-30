import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Zap, Factory } from 'lucide-react';

const cases = [
  {
    client: "Empresa líder en Energía (LATAM)",
    industry: "Oil & Gas",
    icon: Factory,
    problem: "Cierre contable mensual tomaba 12 días por conciliaciones manuales complejas entre subsidiarias en SAP ECC.",
    solution: "Agente IA en AWS que pre-concilia facturas y transacciones, presentando sugerencias al equipo contable para aprobación con 1 clic.",
    results: [
      "Cierre contable reducido a 4 días (-66%).",
      "Ahorro de 320 horas hombre al mes.",
      "100% de cumplimiento en auditoría."
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
  },
  {
    client: "Consorcio de Consumo Masivo",
    industry: "FMCG / Retail",
    icon: Building2,
    problem: "Quiebres de stock en CEDI por pronósticos de demanda estáticos en SAP APO frente a cambios bruscos del mercado.",
    solution: "Modelo predictivo integrado a SAP S/4HANA que ingesta datos externos (clima, eventos) para proponer ajustes de reabastecimiento al Planner.",
    results: [
      "Reducción de quiebres de stock en un 28%.",
      "Disminución de inventario inmovilizado en 15%.",
      "Planner aprueba ajustes en minutos, no horas."
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=800&auto=format&fit=crop"
  },
  {
    client: "Tier 1 Automotriz",
    industry: "Manufactura",
    icon: Zap,
    problem: "Altos costos por paros de línea inesperados; mantenimiento preventivo programado ineficientemente en SAP PM.",
    solution: "Análisis de telemetría IoT con IA Generativa para leer manuales de máquinas y proponer órdenes de mantenimiento predictivo en SAP.",
    results: [
      "OEE (Eficiencia General de Equipos) mejorado 12%.",
      "Reducción de paros no planificados en 40%.",
      "Preservación del conocimiento experto en planta."
    ],
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Cases() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Casos de Estudio</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">Resultados tangibles en producción.</h2>
            <p className="text-gray-600 text-lg">
              Conoce cómo corporativos de toda la región ya están operando más rápido, más seguro y de forma más inteligente.
            </p>
          </div>
          <div>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              Ver todos los casos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => {
            const Icon = study.icon;
            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 relative overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${study.image})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{study.industry}</p>
                      <p className="text-xs text-white/80">{study.client}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-red-500 mb-2 uppercase tracking-wide">El Problema</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.problem}</p>
                  </div>

                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">La Solución</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-neutral-dark mb-4">Resultados Clave</h4>
                    <ul className="space-y-2">
                      {study.results.map((res, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 mt-auto">
                    <Button variant="ghost" className="w-full text-primary hover:text-blue-800 hover:bg-blue-50 group/btn">
                      Leer caso completo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}