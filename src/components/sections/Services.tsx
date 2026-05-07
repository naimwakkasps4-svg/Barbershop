'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Scissors, Ruler, UserRound } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Corte Clásico',
    description: 'Corte tradicional con tijera y máquina, acabado con navaja.',
    price: '15€',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1621605815841-aa89700dc621?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Arreglo de Barba',
    description: 'Perfilado, recorte y ritual de toalla caliente con aceites.',
    price: '10€',
    icon: Ruler,
    image: 'https://images.unsplash.com/photo-1599351431247-f13b283253c9?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Corte & Barba',
    description: 'El combo completo para un look impecable y cuidado.',
    price: '22€',
    icon: UserRound,
    image: 'https://images.unsplash.com/photo-1512690196236-d5a234073e5a?q=80&w=2070&auto=format&fit=crop',
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Nuestros Servicios</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Artesanía y detalle en cada servicio</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                    <service.icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-zinc-600 dark:text-zinc-400">{service.description}</p>
                  <span className="text-2xl font-bold">{service.price}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
