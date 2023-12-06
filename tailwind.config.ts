import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00c5b9",

          secondary: "#007cff",

          accent: "#ff4700",

          neutral: "#101102",

          "base-100": "#2a2d38",

          info: "#00e0ff",

          success: "#b3e000",

          warning: "#af7500",

          error: "#ff133b",
          body:{
            "background-color":"#2a2d38"
          }
        },
      },
    ],
  },
};
export default config;
