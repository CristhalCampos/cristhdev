'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import { services, addons } from '@/utils/data';

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-(--color-bg-secondary)/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-(--color-foreground)">
            Servicios y <span className="text-(--color-secondary)">Precios</span>
          </h2>
          <p className="text-xl text-(--color-fg-secondary) max-w-3xl mx-auto">
            Inversión accesible para profesionalizar tu presencia digital. Sin complicaciones, sin mensualidades obligatorias.
          </p>
        </motion.div>

        {/* Grid de Servicios Principales */}
        <div className={`grid ${services.length === 1 ? 'md:grid-cols-1 justify-items-center' : 'md:grid-cols-2'} gap-8 mb-16`}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 w-full max-w-xl mx-auto rounded-3xl transition-all duration-300 ${
                service.popular
                  ? 'bg-linear-to-br from-(--color-primary)/90 to-(--color-secondary)/90 shadow-2xl scale-105'
                  : 'bg-(--color-background) border border-(--color-bg-secondary)/20 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Etiqueta Popular */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-(--color-background) text-(--color-secondary) rounded-full text-sm font-bold shadow-lg">
                  MÁS POPULAR
                </div>
              )}
              
              {/* Contenedor del Icono */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.popular ? 'bg-white/20 text-white' : 'bg-linear-to-br from-(--color-primary) to-(--color-secondary) text-white'
              }`}>
                {service.icon}
              </div>
              
              {/* Título de Servicio */}
              <h3 className={`text-2xl font-bold mb-2 ${service.popular ? 'text-white' : 'text-(--color-foreground)'}`}>
                {service.title}
              </h3>
              
              {/* Precio */}
              <div className="mb-4">
                <span className={`text-4xl font-bold ${service.popular ? 'text-white' : 'text-(--color-secondary)'}`}>
                  {service.price}
                </span>
                <span className={`text-sm ml-2 ${service.popular ? 'text-white/80' : 'text-(--color-fg-secondary)'}`}>
                  {service.period}
                </span>
              </div>
              
              {/* Descripción */}
              <p className={`mb-6 ${service.popular ? 'text-white/90' : 'text-(--color-fg-secondary)'}`}>
                {service.description}
              </p>
              
              {/* Características */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${service.popular ? 'text-white' : 'text-(--color-secondary)'}`} />
                    <span className={service.popular ? 'text-white/90' : 'text-(--color-fg-secondary)'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Botón de Acción */}
              <button
                onClick={() => scrollToSection('contacto')}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  service.popular
                    ? 'bg-(--color-background) text-(--color-secondary) hover:scale-[1.02]'
                    : 'bg-linear-to-r from-(--color-primary) to-(--color-secondary) text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                Empezar ahora
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sección de Servicios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-(--color-foreground) mb-8">
            Servicios Adicionales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-(--color-background) border border-(--color-bg-secondary)/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--color-primary)/10 to-(--color-secondary)/10 flex items-center justify-center text-(--color-primary) mb-4">
                  {addon.icon}
                </div>
                <h4 className="font-bold text-(--color-foreground) mb-2">{addon.name}</h4>
                <p className="text-sm text-(--color-fg-secondary) mb-3">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloque Próximamente */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-(--color-bg-secondary)/10 border-2 border-dashed border-(--color-bg-secondary)/40"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-(--color-secondary)" />
          <h3 className="text-xl font-bold text-(--color-foreground) mb-2">Más servicios próximamente</h3>
          <p className="text-(--color-fg-secondary)">Estoy trabajando en nuevas soluciones para potenciar tu presencia digital. ¡Mantente atento!</p>
        </motion.div>

      </div>
    </section>
  );
}