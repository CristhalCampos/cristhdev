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
      let targetDate = new Date(`${currentYear}-10-01T23:59:59`);
      
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
      className="fixed top-0 w-full bg-linear-to-r from-[#fe735e] to-[#1f8ff5] text-white py-2.5 px-4 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-10">
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4" />
            <span className="font-bold text-xs sm:text-sm">¡Sorteo Activo!</span>
          </div>
          <p className="hidden sm:block text-xs">
            Gana un <strong>Portafolio GRATIS</strong> o <strong>50% OFF</strong>
          </p>
        </div>

        <div className="flex items-center space-x-1 text-xs opacity-90">
          <Sparkles className="w-3 h-3" />
          <span>+142 artistas participando</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Timer className="w-4 h-4" />
          <div className="flex items-center gap-1 text-xs font-mono font-bold">
            <div className="bg-white/20 rounded px-1.5 py-0.5">
              <span>{formatTime(timeLeft.days)}</span>
              <span className="text-[10px] font-normal ml-0.5">d</span>
            </div>
            <span className="text-white/60">:</span>
            <div className="bg-white/20 rounded px-1.5 py-0.5">
              <span>{formatTime(timeLeft.hours)}</span>
              <span className="text-[10px] font-normal ml-0.5">h</span>
            </div>
            <span className="text-white/60">:</span>
            <div className="bg-white/20 rounded px-1.5 py-0.5">
              <span>{formatTime(timeLeft.minutes)}</span>
              <span className="text-[10px] font-normal ml-0.5">m</span>
            </div>
            <span className="text-white/60">:</span>
            <div className="bg-white/20 rounded px-1.5 py-0.5">
              <span>{formatTime(timeLeft.seconds)}</span>
              <span className="text-[10px] font-normal ml-0.5">s</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}