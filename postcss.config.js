// module.exports = () => ({
// 	plugins: [require("tailwindcss")],
//   })

const tailwindcss = require("tailwindcss");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["source sans pro", ...defaultTheme.fontFamily.sans]
      }
    }
  }
};
