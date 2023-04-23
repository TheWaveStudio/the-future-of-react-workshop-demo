const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /([^\s]+)?heading-\S+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        sun: "#FFC914",
        moon: "#E0AA15",
        primary: {
          50: "#f7f7ff",
          100: "#e8e8ff",
          200: "#d5d6ff",
          300: "#b4b5fe",
          400: "#8484fc",
          500: "#5755f7",
          600: "#3833ea",
          700: "#2822ce",
          800: "#2821a8",
          900: "#231c87",
          950: "#0d0764",
        },
        secondary: {
          50: "#f7f6f6",
          100: "#e5e2e4",
          200: "#cbc4c9",
          300: "#a99fa6",
          400: "#867b81",
          500: "#6b6167",
          600: "#554c51",
          700: "#463f43",
          800: "#3a3537",
          900: "#322f30",
          950: "#131112",
        },
      },
      fontSize: {
        xs: "14px",
        base: "16px",
        medium: "20px",
        large: "24px",
        xl: "30px",
        xxl: "60px",
      },
      fontFamily: {
        sans: ["var(--font-fira-code)", ...fontFamily.serif],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
      },
      letterSpacing: {
        narrow: "-0.025em",
        wide: "0.025em",
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1980px",
      },
      spacing: {
        0: "0px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        40: "40px",
        42: "42px",
        44: "44px",
        48: "48px",
        52: "52px",
        56: "56px",
        60: "60px",
        64: "64px",
        68: "68px",
        72: "72px",
        76: "76px",
        80: "80px",
        88: "88px",
        96: "96px",
        120: "120px",
        144: "144px",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          lg: "44px",
          xl: "42px",
          "2xl": "76px",
          "3xl": "88px",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
        },
      });
    },
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "62.5%" },
        body: { fontSize: "1.6rem", fontFamily: "var(--font-fira-code)" },
      });
    }),
  ],
};
