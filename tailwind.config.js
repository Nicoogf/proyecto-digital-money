/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'fondo': "url('/fondo.jpg')",
        'fondonike': "url('/nike.png')",
        'fondomcdonals': "url('/mcdonals.jpg')",
        'fondoaxion': "url('/axion.jpg')",
        'fondowalmart': "url('/walmart.png')",
        'fondomercadolibre': "url('/mercadolibre.png')",
        'fondoparamount': "url('/paramount.png')",
        'fondosolodeportes': "url('/solodeportes.png')",
        'fondofarmacity': "url('/farmacity.png')",
      },
      colors: {
        "green-lime": '#C1FD35',
        "grey-user": "#201F22",
        "grey-dark": "#161517"
      },
    },
  },
  plugins: [],
};
