/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true } ,
    trailingSlash: true,
    swcMinify: true,
}

module.exports = nextConfig
