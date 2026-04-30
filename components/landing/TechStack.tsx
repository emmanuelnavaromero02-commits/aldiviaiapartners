'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TECH = [
  { category: 'SAP', items: ['S/4HANA', 'ECC', 'BTP', 'IBP', 'Analytics Cloud', 'PM', 'FI/CO', 'MM', 'SD'] },
  { category: 'Cloud AWS', items: ['Amplify', 'DynamoDB', 'ElastiCache', 'Lambda', 'SES', 'S3', 'CloudWatch', 'IAM'] },
  { category: 'Inteligencia Artificial', items: ['Claude AI', 'GPT-4', 'Gemini', 'LangChain', 'RAG', 'Fine-tuning', 'Vector DBs'] },
  { category: 'Analytics', items: ['Power BI', 'Tableau', 'Snowflake', 'dbt', 'Apache Spark', 'Kafka'] },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3">Stack tecnológico</p>
          <h2 className="text-4xl font-black text-white mb-4">Las mejores herramientas del mundo</h2>
          <p className="text-white/50 max-w-xl mx-auto">Dominamos el ecosistema tecnológico enterprise más completo del mercado.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH.map((t, i) => (
            <motion.div
              key={t.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <p className="text-electric font-black text-sm uppercase tracking-widest mb-4">{t.category}</p>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span key={item} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
