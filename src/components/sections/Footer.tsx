import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 text-xl font-bold tracking-tighter">BARBERÍA FIGUERES</div>
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Barbería Figueres. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">Instagram</a>
          <a href="#" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  );
};
