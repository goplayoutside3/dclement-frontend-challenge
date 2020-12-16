module.exports = {
  target: 'serverless',
  webpack(config) {
    config.module.rules.push( 
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/styles/common/_typography.scss',
                './src/styles/common/_variables.scss',
                './src/styles/common/_mixins.scss',
              ],
            },
          },
        ],
      }
    );
    return config;
  },
};
