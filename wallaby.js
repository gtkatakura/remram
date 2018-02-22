const wallabyWebpack = require('wallaby-webpack'); // eslint-disable-line

const webpackConfig = require('./webpack.config.js');

const wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = () => ({
  files: [
    { pattern: 'src/**/*.js', load: false },
  ],
  tests: [
    { pattern: 'test/**/*.spec.js', load: false },
  ],
  postprocessor: wallabyPostprocessor,
  setup() {
    window.__moduleBundler.loadTests(); // eslint-disable-line
  },
  env: {
    kind: 'chrome',
  },
});
