'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { certifications } from '@/utils/data';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Sobre <span className="text-[#fe735e]">mí</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Soy <strong>Cristh Campos</strong>, desarrollador web fullstack desde <strong>2024</strong>. Me especializo en crear experiencias digitales que combinan funcionalidad impecable con diseño excepcional.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Mi misión es ser el aliado técnico que los artistas y diseñadores necesitan para llevar su trabajo al siguiente nivel, traduciendo su visión creativa en código limpio, rápido y escalable.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tecnologías que domino:</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-linear-to-r from-[#1f8ff5]/10 to-[#fe735e]/10 dark:from-[#1f8ff5]/20 dark:to-[#fe735e]/20 text-[#1f8ff5] dark:text-[#fe735e] font-medium border border-[#1f8ff5]/20 dark:border-[#fe735e]/20">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Certificaciones:</h3>
              <div className="space-y-3">
                {certifications.map((cert: { title: string; institution: string; year: string | number }, index: number) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#fe735e]" />
                    <span>{cert.title} - {cert.institution} ({cert.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-4/3 bg-linear-to-br from-[#1f8ff5] to-[#fe735e] flex items-center justify-center">
                <Image
                  src="/foto.jpg"
                  alt="Cristh Campos"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#fe735e]/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#1f8ff5]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}