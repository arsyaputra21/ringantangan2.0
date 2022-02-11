module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "concert-one": ["Concert One", "cursive"],
        "prompt-custom": ["Prompt", "sans-serif"],
        "ubuntu-custom": ["Ubuntu", "sans-serif"],
      },
      colors: {
        main: "#7B95FF",
      },
    },
  },
  plugins: [],
};
