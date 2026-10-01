'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Timer } from 'lucide-react';

export default function GiveawayBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      // Sorteo el 1 de octubre
      let targetDate = new Date(`${currentYear}-11-01T23:59:59`);
      
      // Si ya pasó el 1 de octubre de este año, apuntar al próximo
      if (now > targetDate) {
        targetDate = new Date(`${currentYear + 1}-10-01T23:59:59`);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full bg-linear-to-r from-(--color-primary) to-(--color-secondary) text-white py-2 px-4 z-50 shadow-md"
    >
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-2 px-2 sm:px-6 lg:px-8">
        
        {/* FILA 1 (Móvil) / IZQUIERDA (Escritorio): Texto del sorteo */}
        <div className="flex items-center justify-center gap-2 text-center w-full md:w-auto md:justify-start">
          <div className="flex items-center space-x-1.5 shrink-0">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider">¡Sorteo Activo!</span>
          </div>
          <p className="text-xs sm:text-sm">
            Gana un <strong className="font-extrabold">Portafolio GRATIS</strong> o <strong className="font-extrabold">50% OFF</strong>
          </p>
        </div>

        {/* FILA 2 (Móvil): Este contenedor agrupa los otros dos elementos en una sola línea horizontal en móvil. 
            En escritorio (md:) actúa simplemente como un bloque invisible gracias a 'md:contents' para permitir que sus hijos se posicionen en el centro y la derecha */}
        <div className="flex flex-row items-center justify-center gap-5 w-full md:w-auto md:contents">
          
          {/* CENTRO (Escritorio): Contador de participantes */}
          <div className="flex items-center justify-center space-x-1 text-[11px] sm:text-xs opacity-90 shrink-0 md:order-2">
            <Sparkles className="w-3 h-3" />
            <span>+142 artistas participando</span>
          </div>

          {/* DERECHA (Escritorio): Temporizador */}
          <div className="flex items-center justify-center gap-1.5 shrink-0 md:order-3 md:justify-end">
            <Timer className="w-3.5 h-3.5 opacity-90" />
            <div className="flex items-center gap-0.5 text-[11px] sm:text-xs font-mono font-bold">
              <div className="bg-white/20 rounded px-1 py-0.5 min-w-7 text-center">
                <span>{formatTime(timeLeft.days)}</span>
                <span className="text-[9px] font-normal ml-0.5 opacity-80">d</span>
              </div>
              <span className="text-white/40">:</span>
              <div className="bg-white/20 rounded px-1 py-0.5 min-w-7 text-center">
                <span>{formatTime(timeLeft.hours)}</span>
                <span className="text-[9px] font-normal ml-0.5 opacity-80">h</span>
              </div>
              <span className="text-white/40">:</span>
              <div className="bg-white/20 rounded px-1 py-0.5 min-w-7 text-center">
                <span>{formatTime(timeLeft.minutes)}</span>
                <span className="text-[9px] font-normal ml-0.5 opacity-80">m</span>
              </div>
              <span className="text-white/40">:</span>
              <div className="bg-white/20 rounded px-1 py-0.5 min-w-7 text-center">
                <span>{formatTime(timeLeft.seconds)}</span>
                <span className="text-[9px] font-normal ml-0.5 opacity-80">s</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}