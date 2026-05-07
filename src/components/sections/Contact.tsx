'use client';

import React from 'react';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Reserva tu Cita</h2>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
              Estamos en el centro de Figueres. Rellena el formulario y nos pondremos en contacto contigo para confirmar tu hora.
            </p>
            
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg border-2 border-zinc-100 dark:border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1512690196236-d5a234073e5a?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior Barbería Figueres" 
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Dirección</h4>
                <p className="text-zinc-600 dark:text-zinc-400">Carrer Nou, 123, 17600 Figueres, Girona</p>
              </div>
              <div>
                <h4 className="font-bold">Horario</h4>
                <p className="text-zinc-600 dark:text-zinc-400">Lun - Vie: 9:00 - 20:00</p>
                <p className="text-zinc-600 dark:text-zinc-400">Sáb: 9:00 - 14:00</p>
              </div>
              <div>
                <h4 className="font-bold">Teléfono</h4>
                <p className="text-zinc-600 dark:text-zinc-400">+34 972 00 00 00</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-800"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Teléfono</label>
                  <input
                    id="phone"
                    className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-800"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">Servicio</label>
                <select
                  id="service"
                  className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-800"
                >
                  <option>Corte Clásico</option>
                  <option>Arreglo de Barba</option>
                  <option>Corte & Barba</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">Fecha preferida</label>
                <input
                  id="date"
                  type="date"
                  className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensaje (opcional)</label>
                <textarea
                  id="message"
                  className="min-h-[100px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-800"
                  placeholder="¿Alguna petición especial?"
                />
              </div>
              <Button className="w-full">Enviar Solicitud</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
