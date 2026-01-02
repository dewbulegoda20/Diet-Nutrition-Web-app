/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ec80",
        "primary-dark": "#0ea574",
        "background-light": "#f6f8f7",
        "background-dark": "#111827",
        "text-main": "#111814",
        "text-muted": "#618975",
        "card-light": "#ffffff",
        "border-light": "#e5e7eb",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "sans": ["Manrope", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'glow': '0 4px 12px rgba(19, 236, 128, 0.2)',
      }
    },
  },
  plugins: [],
}
