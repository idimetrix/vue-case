module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
};
