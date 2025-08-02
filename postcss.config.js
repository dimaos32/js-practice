import postcssPxToRem from "postcss-pxtorem";
import postcssPresetEnv from "postcss-preset-env";
import postcssCombineMediaQuery from "postcss-combine-media-query";
import postcssSortMediaQueries from "postcss-sort-media-queries";

export default ({ env }) => {
  const isProd = env === "production";

  const plugins = [
    postcssPresetEnv({
      stage: 3,
      autoprefixer: { grid: true },
    }),
    postcssCombineMediaQuery(),
    postcssSortMediaQueries({
      sort: "desktop-first",
    }),
  ];

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ["*", "!border", "!border-width", "!outline", "!box-shadow"],
        mediaQuery: true,
        minPixelValue: 2,
        selectorBlackList: [".visually-hidden"],
      }),
    );
  }

  return {
    plugins,
  };
};
