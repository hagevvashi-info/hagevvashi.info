/** @type {import('@babel/core').TransformOptions} */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      [
        "@babel/preset-react",
        {
          // v8になったら消して良さそう
          // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
  };
};