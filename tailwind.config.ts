import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#333333",
        primary: "#633CFF",
        grey: "#737373",
        lightGrey: "#FAFAFA",
        borders: "#D9D9D9",
        "light-purple": "#EFEBFF",
        "purple-hover" : "#BEADFF"
      },
    },
  },
  plugins: [],
};
export default config;