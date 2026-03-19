/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        "primary-bg": "#0A2328",
        "secondary-dark": "#172A3A",
        "card-surface": "#1E1E1E",

        // Accent colors
        "accent-teal": "#3AAFA9",
        "accent-yellow": "#FFD166",
        "accent-red": "#E63946",
        "accent-green": "#2ECC71",

        // Legacy support
        "primary-dark": "#0A2328",
        "card-bg": "#0F2E34",
        "accent-aqua": "#3AAFA9",
        "soft-aqua-hover": "#66D2C7",
        "highlight-yellow": "#FFD166",
        "text-primary": "#F7F9FA",
        "text-secondary": "#9FB3B6",
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(58, 175, 169, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(58, 175, 169, 0.6)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
