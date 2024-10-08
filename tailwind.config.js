/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enables dark mode using the "class" strategy
  theme: {
    extend: {}, // You can extend the default theme here if needed
  },
  plugins: [], // Plugins can be added here if necessary
}
