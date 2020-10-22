// const purgecss = require("@fullhuman/postcss-purgecss");
// const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    // cssnano({
    //   preset: "default",
    // }),
    // purgecss({
    //   content: ["./layouts/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
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
