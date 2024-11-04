/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        root_background: "var(--root-background)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-400)",
        x_text: {
          heading: "var(--grey-800)",
          normal: "var(--grey-600)",
          secondary: "var(--grey-500)",
          label: "var(--grey-400)",
          danger: "var(--red-500)",
          success: "var(--green-500)",
        },
        color: {
          grey: {
            300: "var(--grey-300)",
            400: "var(--grey-400)",
            500: "var(--grey-500)",
            600: "var(--grey-600)",
            800: "var(--grey-800)",
            900: "var(--grey-900)",
          },
          primary: {
            300: "var(--primary-300)",
            400: "var(--primary-400)",
            500: "var(--primary-500)",
            600: "var(--primary-600)",
          },
          secondary: {
            300: "var(--secondary-300)",
            400: "var(--secondary-400)",
            500: "var(--secondary-500)",
            600: "var(--secondary-600)",
          },
          error: {
            300: "var(--error-300)",
            400: "var(--error-400)",
            500: "var(--error-500)",
            600: "var(--error-600)",
          },
          warning: {
            300: "var(--yellow-300)",
            400: "var(--yellow-400)",
            500: "var(--yellow-500)",
            600: "var(--yellow-600)",
          },
          success: {
            300: "var(--green-300)",
            400: "var(--green-400)",
            500: "var(--green-500)",
            600: "var(--green-600)",
          },
        },
      },
      fontSize: {
        vvxs: "0.5rem",
        vxs: "0.625rem",
      }
    },
  },
  plugins: [],
};
