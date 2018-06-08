const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
  entry: {
      app: PATHS.app
  },
    output: {
      path: PATHS.build,
        filename: 'bundle.js'
    }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {});
}

if(TARGET === 'build') {
    module.exports = merge(common, {});
}