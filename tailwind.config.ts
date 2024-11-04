import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        // md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
