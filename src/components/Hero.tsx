'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [participantsCount, setParticipantsCount] = useState(142);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticipantsCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-(--color-foreground)">Tu arte merece su</span><br />
              <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">propio escenario</span>
            </h1>
            <p className="text-lg md:text-xl text-(--color-fg-secondary) mb-8 leading-relaxed">
              Diseño y desarrollo portafolios web exclusivos para diseñadores gráficos y artistas visuales que quieren dejar de depender de las redes sociales y cobrar lo que realmente valen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('servicios')} className="px-8 py-4 rounded-full bg-linear-to-r from-(--color-primary) to-(--color-secondary) text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Quiero mi portafolio</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="px-8 py-4 rounded-full border-2 border-(--color-primary) text-(--color-primary) font-semibold text-lg hover:bg-(--color-primary-darker) hover:text-white transition-all duration-300">
                Ver proyectos
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-(--color-primary)/20 to-(--color-secondary)/20 p-8">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-(--color-primary) to-(--color-secondary) flex items-center justify-center">
                <div className="p-8">
                  <Image
                    src="/ejemplo.png"
                    alt="Hero Image"
                    width={400}
                    height={400}
                    loading="eager"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-(--color-secondary)/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-(--color-primary)/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}