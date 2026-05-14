/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        fg: "#e8e6e1",
        accent: "#d4ff3e",
        muted: "#525252",
        border: "#262626",
        card: "#141414",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
