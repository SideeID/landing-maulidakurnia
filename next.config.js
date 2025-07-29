const isDev = process.env.NODE_ENV === 'development';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: isDev, 
});

module.exports = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['placehold.co', 'maulidakurnia.vercel.app'],
  },
});
