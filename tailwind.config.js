/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,css}",
    "./src/pages/**/*.{js,ts,jsx,tsx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    colors: {
      primary: "#ECF7FF",
      primary_dark: "#A6B9D6",
      secondary: "#00288A",
      secondary_light: "#113A9F",
      shadow_transparent: "#113A9F70",
      secondary_lighter: "#3DBCF9",
      tertiary: "#FFF",
    },
    extend: {},
  },
  mode: "jit",
  plugins: [
    function ({ addVariant }) {
      addVariant("firstChild", "&>:nth-child(1)");
      addVariant("secondChild", "&>:nth-child(2)");
      addVariant("thirdChild", "&>:nth-child(3)");
    },
  ],
};
