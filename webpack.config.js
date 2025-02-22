const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      // Add other rules as needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add other extensions as needed
  },
  devServer: {
    contentBase: './dist', // Serve content from the output directory
  },
};
