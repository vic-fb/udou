const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          sourceMap: false,
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      }],
    });
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
};
