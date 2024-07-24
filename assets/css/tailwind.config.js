const mainDir = __dirname + "/../../";

module.exports = {
  content: [
    `${mainDir}/layouts/**/*.html`,
    `${mainDir}/content/**/*.md`,
    `${mainDir}/content/**/*.html`,
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
