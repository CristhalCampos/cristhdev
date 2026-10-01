'use client';
import { motion } from 'framer-motion';
import { Globe, Sparkles, Terminal } from 'lucide-react';

export default function ValueProposition() {
  const items = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'El "Efecto Vitrina Compartida"',
      description: 'En Behance o Instagram, tu cliente está a un clic de ver a tu competencia. Tu web propia elimina las distracciones y mantiene el foco 100% en tu obra.' 
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Identidad de Marca Sin Límites',
      description: 'Las redes te obligan a encajar en sus moldes. Tu portafolio web será una extensión de tu arte, una obra en sí misma que refleja tu identidad única.' 
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Activo Digital 100% Tuyo',
      description: 'Si el algoritmo cambia o la plataforma cierra, pierdes tu audiencia. Con un dominio propio, tú tienes el control absoluto de tu negocio y tu futuro.' 
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-(--color-bg-secondary)/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-(--color-background) shadow-lg hover:shadow-2xl transition-all duration-300 border border-(--color-bg-secondary)/20"
            >
              {/* Contenedor del Icono con gradiente global */}
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-secondary) flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              
              {/* Título adaptable */}
              <h3 className="text-xl font-bold text-(--color-foreground) mb-3">
                {item.title}
              </h3>
              
              {/* Descripción adaptable */}
              <p className="text-(--color-fg-secondary) leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}