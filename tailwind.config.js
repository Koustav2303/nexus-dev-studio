/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict monochrome palette
        pureBlack: "#050505",
        pureWhite: "#FAFAFA",
      },
      backgroundImage: {
        // Subtle gradients for deep UI layers
        'radial-glow': 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)',
      }
    },
  },
  plugins: [],
}