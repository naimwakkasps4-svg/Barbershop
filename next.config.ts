import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Barbershop',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // En Next.js 16, la configuración de eslint puede variar, 
  // si da error la omitimos o usamos la correcta según la documentación oficial
};

export default nextConfig;
