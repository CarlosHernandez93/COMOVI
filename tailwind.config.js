/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {

        'fondo-azul1' : "url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXp1bCUyMGRlZ3JhZGFkb3xlbnwwfHwwfHw%3D&w=1000&q=80')",

        'fondo-azul2' : "url('https://fondosmil.com/fondo/23223.jpg')",
      }
    },
  },
  plugins: [],
}
