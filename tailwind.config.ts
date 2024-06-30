import { basePath } from "./next.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "540px"
      },
      backgroundImage: {
        "hero": `url("${basePath}/assets/banner.d2ec7521.webp")`
      },
      keyframes: {
        "fade-in-down": {
          from: {
            opacity: "0",
            transform: "translateY(-1px)",
          },
          to: {
              opacity: 1,
              transform: "translateY(0)",
          },
        },
        "slide-in-down": {
          "0%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          }
        }
      },
      animation: {
        fadeInDown: "fade-in-down 0.5s forwards",
        slideInDown: "slide-in-down 1s forwards"
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "50% 100%"
      },
      backgroundSize: {
        "size-200": "200% 100%"
      },
      colors: {
        "gray-910": "#111111",
        "pink-1000": "#270010",
      }
    },
  },
  plugins: [],
};