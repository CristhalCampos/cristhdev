'use client';
import { motion } from 'framer-motion';
import { Code, ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '@/utils/data';

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Proyectos <span className="text-[#fe735e]">Destacados</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Soluciones reales que generan impacto</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#1f8ff5] to-[#fe735e] flex items-center justify-center">
                  <Code className="w-24 h-24 text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                    <GitBranch className="w-5 h-5" />
                    <span>Código</span>
                  </a>
                  <a href={project.live} className="px-6 py-3 rounded-full bg-[#fe735e] text-white font-semibold hover:bg-[#f5573e] transition-colors flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver demo</span>
                  </a>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-sm font-medium text-gray-900 dark:text-white">{project.category}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#fe735e] transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                {project.challenge && (
                  <div className="mb-4 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200"><strong>Reto:</strong> {project.challenge}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1f8ff5]/10 dark:bg-[#fe735e]/10 text-[#1f8ff5] dark:text-[#fe735e] border border-[#1f8ff5]/20 dark:border-[#fe735e]/20">{tech}</span>
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