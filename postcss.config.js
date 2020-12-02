

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    // require('cssnano')({
    //   preset: 'default',
    // }),
    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
    //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // }),
  ],
};
// module.exports = {
//   plugins: [
//     "tailwindcss",
//     "postcss-flexbugs-fixes",
//     [
//       "postcss-preset-env",
//       {
//         autoprefixer: {
//           flexbox: "no-2009",
//         },
//         stage: 3,
//         features: {
//           "custom-properties": false,
//         },
//       },
//     ],
//   ],
// };
