/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/docs',
            permanent: true,
          },
          {
            source: '/docs/my_component',
            destination: '/docs/my_component/top',
            permanent: true,
          },
        ]
    },
}

module.exports = nextConfig
