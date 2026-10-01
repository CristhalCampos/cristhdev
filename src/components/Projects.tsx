'use client';
import { motion } from 'framer-motion';
import { Code, ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '@/utils/data';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-(--color-bg-secondary)/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-(--color-foreground)">
            Proyectos <span className="text-(--color-secondary)">Destacados</span>
          </h2>
          <p className="text-xl text-(--color-fg-secondary)">
            Soluciones reales que generan impacto
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Proyectos */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-(--color-background) rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-(--color-bg-secondary)/20"
            >
              {/* Contenedor Superior (Imagen del Proyecto o Placeholder) */}
              <div className="relative h-64 overflow-hidden bg-linear-to-br from-(--color-primary) to-(--color-secondary)">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="eager"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-24 h-24 text-white opacity-50" />
                  </div>
                )}
                
                {/* Capa de Hover / Acciones */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-(--color-background) text-(--color-foreground) font-semibold hover:bg-(--color-bg-secondary)/20 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
                  >
                    <GitBranch className="w-5 h-5" />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-(--color-secondary) text-white font-semibold hover:bg-(--color-secondary-darker) transition-all duration-200 flex items-center space-x-2 cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver demo</span>
                  </a>
                </div>
                
                {/* Badge de Categoría */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-(--color-background)/90 text-sm font-medium text-(--color-foreground) backdrop-blur-xs z-10">
                  {project.category}
                </div>
              </div>

              {/* Contenido Inferior (Información del Proyecto) */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-(--color-foreground) mb-3 group-hover:text-(--color-secondary) transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-(--color-fg-secondary) mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Desafío / Reto */}
                {project.challenge && (
                  <div className="mb-4 p-4 rounded-xl bg-(--color-bg-secondary)/20 border border-(--color-bg-secondary)/30">
                    <p className="text-sm text-(--color-fg-secondary)">
                      <strong className="text-(--color-foreground)">Reto:</strong> {project.challenge}
                    </p>
                  </div>
                )}
                
                {/* Tecnologías utilizadas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-(--color-primary)/10 text-(--color-primary) border border-(--color-primary)/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}