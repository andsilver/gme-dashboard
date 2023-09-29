/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1600px",
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#4A9EA0",
        },
        secondary: {
          DEFAULT: "#249690",
        },
        glen: "#E3862F",
        gray: {
          DEFAULT: "#171717",
          100: "#CCC",
          400: "#787878",
          500: "#848484",
          600: "#8E8E8E",
        },
        neutrals: {
          DEFAULT: "#F4F4F4",
        },
        "light-yellow": {
          DEFAULT: "#f3efe5",
        },
        purple: {
          DEFAULT: "#121435",
        },
        warn: {
          DEFAULT: "#EA4B4B",
        },
      },
    },
  },
  plugins: [],
};
