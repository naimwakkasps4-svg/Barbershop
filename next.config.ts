import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Barbershop', // Reemplaza esto con el nombre exacto de tu repositorio si es diferente
};

export default nextConfig;
