import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Barbería Figueres Logo" className="h-10 w-auto rounded-full" />
          <span className="text-xl font-bold tracking-tighter">BARBERÍA FIGUERES</span>
        </div>
        <div className="hidden space-x-8 md:flex">
          <a href="#" className="text-sm font-medium hover:text-zinc-400">Inicio</a>
          <a href="#servicios" className="text-sm font-medium hover:text-zinc-400">Servicios</a>
          <a href="#galeria" className="text-sm font-medium hover:text-zinc-400">Galería</a>
          <a href="#contacto" className="text-sm font-medium hover:text-zinc-400">Reserva</a>
        </div>
        <a href="#contacto">
          <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black hover:bg-zinc-200">
            Cita Online
          </button>
        </a>
      </div>
    </nav>
  );
};
