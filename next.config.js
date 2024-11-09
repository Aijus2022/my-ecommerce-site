// next.config.mjs
const nextConfig = {
  webpack: (config) => {
      config.cache = false;
      return config;
  },
};

export default nextConfig;

  
