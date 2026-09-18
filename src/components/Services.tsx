'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import { services, addons } from '@/utils/data';

export default function Services() {
  // Lógica de scroll local
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Servicios y <span className="text-[#fe735e]">Precios</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Inversión accesible para profesionalizar tu presencia digital. Sin complicaciones, sin mensualidades obligatorias.</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} whileHover={{ y: -10 }} className={`relative p-8 rounded-3xl ${service.popular ? 'bg-linear-to-br from-[#1f8ff5] to-[#fe735e] text-white shadow-2xl scale-105' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>
              {service.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white text-[#fe735e] rounded-full text-sm font-bold shadow-lg">MÁS POPULAR</div>}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.popular ? 'bg-white/20' : 'bg-linear-to-br from-[#1f8ff5] to-[#fe735e] text-white'}`}>{service.icon}</div>
              <h3 className={`text-2xl font-bold mb-2 ${service.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{service.title}</h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${service.popular ? 'text-white' : 'text-[#fe735e]'}`}>{service.price}</span>
                <span className={`text-sm ml-2 ${service.popular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>{service.period}</span>
              </div>
              <p className={`mb-6 ${service.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${service.popular ? 'text-white' : 'text-[#fe735e]'}`} />
                    <span className={service.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contacto')} className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${service.popular ? 'bg-white text-[#fe735e] hover:bg-gray-100' : 'bg-linear-to-r from-[#1f8ff5] to-[#fe735e] text-white hover:shadow-lg'}`}>Empezar ahora</button>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Servicios Adicionales (Add-ons)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#1f8ff5]/20 to-[#fe735e]/20 flex items-center justify-center text-[#1f8ff5] dark:text-[#fe735e] mb-4">{addon.icon}</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{addon.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center p-8 rounded-2xl bg-linear-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-700">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#fe735e]" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Más servicios próximamente</h3>
          <p className="text-gray-600 dark:text-gray-300">Estoy trabajando en nuevas soluciones para potenciar tu presencia digital. ¡Mantente atento!</p>
        </motion.div>
      </div>
    </section>
  );
}