/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS},
    images: {
        domains: ['localhost', "roman-webcms.herokuapp.com", "res.cloudinary.com"]
    },
}

module.exports = nextConfig
