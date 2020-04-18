const path = require('path')

module.exports = {
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /(node_modules|bower_components|assets|public\/)/,
      },
    ],
  },
}
