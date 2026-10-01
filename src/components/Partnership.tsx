'use client';
import { motion } from 'framer-motion';
import { Users, DollarSign, ArrowRight } from 'lucide-react';

export default function Partnership() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-(--color-primary)/10 to-(--color-secondary)/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge Superior */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-(--color-secondary) text-white text-sm font-semibold mb-4 shadow-sm">
            <Users className="w-5 h-5 mr-2" />
            Para Diseñadores
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-(--color-foreground)">
            ¿Eres diseñador y <span className="text-(--color-secondary)">pierdes clientes</span>?
          </h2>
          
          <p className="text-xl text-(--color-fg-secondary) max-w-3xl mx-auto leading-relaxed">
            Muchos diseñadores pierden proyectos completos porque sus clientes les piden &quot;la web lista para publicar&quot;
            y ellos solo pueden entregar el diseño. <strong className="text-(--color-foreground)">Yo soy tu socio técnico para que eso termine.</strong>
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Beneficios */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Socio Recurrente",
              description: "Tus clientes creen que tú hiciste la web. Yo trabajo detrás de escena como tu equipo técnico. Tú cobras lo que quieras, yo recibo mi tarifa fija.",
              benefit: "Sin preocupaciones técnicas. Tú diseñas, yo desarrollo."
            },
            {
              icon: <DollarSign className="w-8 h-8" />,
              title: "Más Ingresos",
              description: "Deja de decir 'eso no lo hago' y empieza a ofrecer soluciones completas. Tus clientes pagarán más por un servicio integral.",
              benefit: "Incrementa el valor de tus proyectos un 200-300%."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-(--color-background) shadow-xl border border-(--color-bg-secondary)/20"
            >
              {/* Icono con Degradado */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-(--color-primary) to-(--color-secondary) flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-(--color-foreground) mb-4">
                {item.title}
              </h3>
              
              <p className="text-(--color-fg-secondary) mb-4 leading-relaxed">
                {item.description}
              </p>
              
              {/* Contenedor de Beneficio Destacado (Adaptable) */}
              <div className="p-4 rounded-xl bg-(--color-secondary)/10 border border-(--color-secondary)/20">
                <p className="text-sm font-bold text-(--color-secondary)">
                   {item.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón de Llamada a la Acción */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full bg-linear-to-r from-(--color-primary) to-(--color-secondary) text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Hablemos de cómo trabajar juntos</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}