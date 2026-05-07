'use client';

import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593702295094-ada35bc1d19d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621605815841-aa89700dc621?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512690196236-d5a234073e5a?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599351431247-f13b283253c9?q=80&w=1974&auto=format&fit=crop',
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl italic">Nuestra Galería</h2>
          <p className="text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">El arte del corte en Figueres</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-xl">
              <img 
                src={image} 
                alt={`Barbería Figueres Gallery ${index + 1}`} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">Ver más</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
