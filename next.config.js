/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/docs",
                permanent: true,
            },
            {
                source: "/docs/my_component",
                destination: "/docs/my_component/dokumentasiku",
                permanent: true,
            },
            {
                source: "/docs/utils",
                destination: "/docs/utils/dokumentasiku",
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
