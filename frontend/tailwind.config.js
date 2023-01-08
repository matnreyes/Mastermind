/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#53d166",
          "secondary": "#a02e11",
          "accent": "#195f8e",
          "neutral": "#2E263B",
          "base-100": "#252145",
          "info": "#62B2F4",
          "success": "#49D4AF",
          "warning": "#ECA355",
          "error": "#F43444",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
