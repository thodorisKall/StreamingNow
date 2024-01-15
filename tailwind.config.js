/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "c-blue": "#1e90ff",
        "c-red": "#ff6347",
        "g-black": "#272829",
        "c-white": "#f8f8ff",
        gold: "#ffd700",
        "grey-t": "#A3A3A3",
      },
    },
  },
  plugins: [],
}
