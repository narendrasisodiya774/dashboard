/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cool-yello-0": "#FF900D1A",
        "cool-blue-0": "#4F45E41A",
        "cool-blue-light": "#7A21EB1A",
        "cool-blue-light-0": "#D6D4F5",
        "cool-blue": "#4F45E4",
        "cool-blue-1": "#3830B7",
        "cool-green-0": "#05BF8F1A",
        "cool-green": "#19AC59",
        "cool-light": "#F7F9FB",
        "cool-light-1": "#0000001A",
        "cool-light-2": "#E5E5E5",
        "cool-light-3": "#E9E9E9",
        "cool-light-4": "#ECEDEE",
      },
    },
  },
  plugins: [],
};
