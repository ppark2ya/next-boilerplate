/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    // alias 추가
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};
