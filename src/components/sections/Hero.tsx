'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { Hero3D } from './Hero3D';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background 3D */}
      <Hero3D />
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-5xl font-bold tracking-tight md:text-8xl"
        >
          Estilo y Tradición en <br />
          <span className="bg-gradient-to-r from-green-400 via-pink-500 to-green-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
            Figueres
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-zinc-300 md:text-xl"
        >
          La mejor experiencia de barbería clásica y moderna en el corazón de Figueres. 
          Cortes de precisión, afeitados tradicionales y cuidado personalizado.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="bg-gradient-to-r from-green-400 to-pink-500 text-white hover:opacity-90 border-none px-10 text-xl py-8">
            Reservar Cita
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-10 text-xl py-8">
            Ver Servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
