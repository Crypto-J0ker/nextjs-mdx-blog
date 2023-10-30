/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/Crypto-J0ker/test-blogposts/main/images/**',
        },
        ],
    }
}

module.exports = nextConfig
