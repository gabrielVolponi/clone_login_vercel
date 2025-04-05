/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Inclua o arquivo HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // Inclua arquivos JS/TS/React no diretório src
  ],
  theme: {
    extend: {
      colors: {
        // Adicione cores personalizadas, se necessário
        primary: "#1a202c",
        secondary: "#2d3748",
      },
    },
  },
  plugins: [],
};