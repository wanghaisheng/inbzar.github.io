const mainDir = __dirname + "/../../";

module.exports = {
  plugins: [
    require("tailwindcss")(mainDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [mainDir],
    }),
  ],
};
