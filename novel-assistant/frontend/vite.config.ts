// frontend/vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 后端服务地址
        changeOrigin: true,
      },
    },
  },
};
