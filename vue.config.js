module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@examples': '@/components/others/examples',
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        // 全局注入
        // prependData: `
        // @import "@/assets/scss/_init.scss";
        // `,
      },
    },
  },
};
