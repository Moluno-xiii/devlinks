import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#333333",
        primary: "#633CFF",
        grey: "#737373",
        lightGrey: "#FAFAFA",
        lightWhite: "#F7F7F7",
        borders: "#D9D9D9",
        blue: "#2D68FF",
        "light-purple": "#EFEBFF",
        "purple-hover" : "#BEADFF"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;