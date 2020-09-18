module.exports = {
  plugins: [
    ['postcss-short', { prefix: 'x' }],
    'postcss-preset-env',
    'precss',
    'postcss-simple-vars',
    'postcss-nested',
    'autoprefixer'
  ]
};
