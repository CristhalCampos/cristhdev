'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { certifications, technologies } from '@/utils/data';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-(--color-primary)/10 to-(--color-secondary)/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Columna Izquierda: Información */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-(--color-foreground)">
              Sobre <span className="text-(--color-secondary)">mí</span>
            </h2>
            
            <p className="text-lg text-(--color-fg-secondary) mb-6 leading-relaxed">
              Soy <strong className="text-(--color-foreground)">Cristhal Campos</strong>, desarrollador web fullstack desde <strong className="text-(--color-foreground)">2024</strong>. Me especializo en crear experiencias digitales que combinan funcionalidad impecable con diseño excepcional.
            </p>
            
            <p className="text-lg text-(--color-fg-secondary) mb-8 leading-relaxed">
              Mi misión es ser el aliado técnico que los artistas y diseñadores necesitan para llevar su trabajo al siguiente nivel, traduciendo su visión creativa en código limpio, rápido y escalable.
            </p>

            {/* Certificaciones */}
            <div>
              <h3 className="text-xl font-semibold text-(--color-foreground) mb-4">
                Certificaciones
              </h3>
              <div className="space-y-3">
                {certifications.map((cert: { title: string; institution: string; year: string | number }, index: number) => (
                  <div key={index} className="flex items-center space-x-3 text-(--color-fg-secondary)">
                    <CheckCircle className="w-5 h-5 text-(--color-secondary) shrink-0" />
                    <span>{cert.title} - <span className="font-medium text-(--color-foreground)">{cert.institution}</span> ({cert.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Imagen */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-4/3 bg-linear-to-br from-(--color-primary) to-(--color-secondary) flex items-center justify-center">
                <Image
                  src="/foto.jpg"
                  alt="Cristh Campos"
                  width={400}
                  height={400}
                  loading="eager"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-(--color-secondary)/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-(--color-primary)/20 rounded-full blur-2xl" />
          </motion.div>

        </div>

        {/* Sub-sección: Carrusel de Tecnologías */}
        <div>
          <h3 className="text-xl font-semibold text-(--color-foreground) mb-6 text-center">
            Tecnologías
          </h3>
          
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_10%,black_90%,transparent_100%)]">
            <motion.div
              className="flex w-max gap-4 py-2"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {[...technologies, ...technologies].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 shrink-0 px-5 py-3 rounded-full bg-(--color-background) text-(--color-primary) font-medium border border-(--color-primary)/20 hover:border-(--color-primary)/60 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}