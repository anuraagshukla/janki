/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
          colors: {
      bg: "#eae5de",        // main background
      surface: "#FBFAF8",   // cards
      primary: "#3F3D56",   //  headings
      accent: "#E6B325",    // highlights
      text: "#1F2937",      // main text
      muted: "#6B7280",     // secondary text
    },

    },
  },
  plugins: [],
};
