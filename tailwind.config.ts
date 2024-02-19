import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      minHeight: {
        "dynamic-screen": "100dvh"
      },
      screens: {
        xs: {
          max: "360px"
        },
        xsm: {
          min: "512px"
        }
      },
      colors: {
        "font-color-primary-light": "#424649",
        "font-color-primary-dark": "#FFFFFF",
        "font-color-secondary-light": "#A6B3CA",
        "font-color-secondary-dark": "#8E94A4",
        "primary-bg-light": "#F5F8FF",
        "primary-bg-dark": "#141C2F",
        "secondary-bg-light": "#FEFEFE",
        "secondary-bg-dark": "#1F2A48",
        "custom-accent-color": "#0079FE"
      }
    }
  },
  plugins: [require("daisyui")]
};
export default config;
