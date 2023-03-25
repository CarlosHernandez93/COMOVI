/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {

        'bio' : "url('https://www.redaccionmedica.com/images/destacados/la-bioingenieria-aliado-estrategico-contra-enfermedades-sanguineas-raras-7832_620x368.jpg')",

        'comercial' : "url('https://www.nosequeestudiar.net/site/assets/files/1695516/carrera-ingenieria-comercial.jpg')",

        'sistemas' : "url('https://definicion.de/wp-content/uploads/2009/03/ingenieria-de-sistemas.jpg')",

        'electronica' : "url('https://serviciostecnicosmovil.com/wp-content/uploads/2020/06/ingenieria-electronica-de-microprocesadores-peq.jpg')",

        'energias' : "url('https://www.elespectador.com/resizer/QqRCmVKnwulfFZ1NBA4Y4kA0Bg4=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/5C77CCP3NZBLDCP6TPU7QGWUWU.jpg')",

        'industrial' : "url('https://cdn.euroinnova.edu.es/img/subidasEditor/ingenieria%20industrial-1597837134.jpg')",

        'fondo-azul1' : "url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXp1bCUyMGRlZ3JhZGFkb3xlbnwwfHwwfHw%3D&w=1000&q=80')",

        'fondo-azul2' : "url('https://fondosmil.com/fondo/23223.jpg')",
      }
    },
  },
  plugins: [],
}
