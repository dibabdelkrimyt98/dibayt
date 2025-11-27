// client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This is vital for scanning your components
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        // Based on your designs (Welcome, Works, Academic pages)
        'primary': '#1F2937',     // Dark Navy/Slate (used for Navbar, Footers, Headings)
        'secondary': '#4B5563',   // Medium Gray (used for body text)
        'accent': '#F97316',      // Bright Orange (used for buttons, links)
        'background-light': '#F3F4F6', // Light gray background for cards/sections
      }
    },
  },
  plugins: [],
}