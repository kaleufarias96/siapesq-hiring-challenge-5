import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/admin/dashboard',
        destination: '/admin/dashboard/monitoramento',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/admin/gerenciamento',
        destination: '/admin/gerenciamento/reservatorios',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
