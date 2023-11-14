/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mockuuups-web.ams3.cdn.digitaloceanspaces.com',
          port: '',
          pathname: '/web/images/**',
        },
      ],
    },
  }
