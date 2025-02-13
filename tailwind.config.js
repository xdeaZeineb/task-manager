/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d6542c",
        secondary: "#124c81",
        background: "#fdfdfd",
        text: "#3c345c",
      },
      fontFamily: {
        khand: ["Khand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// Primary Accent (Buttons, Highlights):
// #d6542c (RGB: 214, 84, 44)
// Usage: Primary buttons, call-to-action elements, and key highlights.
// Secondary Accent (Links, Subtle Highlights):
// #124c81 (RGB: 18, 76, 129)
// Usage: Links, secondary buttons, and subtle highlights.
// Background (Main Background, Cards):
// #fdfdfd (Near White)
// Usage: Main background, card backgrounds, and container sections for a clean, light look.
// Text (Primary and Secondary Text):
// #3c345c (RGB: 60, 52, 92)
// Usage: Primary text color for headers and body text, ensuring good contrast against the light background.
