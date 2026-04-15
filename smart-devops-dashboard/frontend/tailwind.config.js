/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0A2328",
        "card-bg": "#0F2E34",
        "accent-aqua": "#3AAFA9",
        "soft-aqua-hover": "#66D2C7",
        "highlight-yellow": "#FFD166",
        "text-primary": "#F7F9FA",
        "text-secondary": "#9FB3B6",
      },
    },
  },
  plugins: [],
};
