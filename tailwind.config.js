/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#89CFF0",
        },
        secondary: {
          100: "#001F54",
          200: "#D3D3D3",
        },
        accent: {
          100: "#FFD700",
          200: "#32CD32",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#2F4F4F",
        },
      },
    },
  },
  plugins: [],
}