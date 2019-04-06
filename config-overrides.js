const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = override(
  /**
   * progress plugin
   * @param {*} config 
   */
  function Progress(config) {
    config.plugins.push(new ProgressBarPlugin())
    return config
  },
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addDecoratorsLegacy(),
  function hotLoader(config, env) {
    return rewireReactHotLoader(config, env)
  }
)