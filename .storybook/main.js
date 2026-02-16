const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  stories: ['../src/plugins/arancia_design_system/public/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    // Ensure webpack picks a browser-compatible chunk format.
    // Without this, webpack can fail to infer a default chunk format depending on the target/environment.
    config.target = 'web';
    config.output = config.output || {};
    config.output.chunkFormat = 'array-push';

    // Allow imports like: `import ... from 'src/...';`
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      src: path.resolve(__dirname, '../src'),
    };

    config.resolve.extensions = config.resolve.extensions || ['.js', '.jsx', '.ts', '.tsx'];
    if (!config.resolve.extensions.includes('.ts')) config.resolve.extensions.push('.ts');
    if (!config.resolve.extensions.includes('.tsx')) config.resolve.extensions.push('.tsx');

    // Basic SCSS support for component styles & token files.
    config.module.rules.push({
      // Important: do NOT include `.css` here, otherwise plain CSS (like EUI's dist CSS)
      // gets piped through `sass-loader` and breaks with "Unknown word var".
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: { importLoaders: 1 },
        },
        require.resolve('sass-loader'),
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Transpile TS/TSX (and JSX in .storybook/preview) using the repo Babel preset.
    // Without this, webpack can't parse `import type` or TS syntax in stories.
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            configFile: false,
            presets: [require.resolve('@osd/babel-preset/webpack_preset')],
          },
        },
      ],
      include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../.storybook')],
    });

    return config;
  },
};


