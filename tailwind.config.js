/** @type {import('tailwindcss').Config} */
export default {

  darkMode: 'class',
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      'mobile': {
        min: '320px',
        max: '500px'
      },
      'tablet': {
        min: '600px',
        max: '999px'
      },
      'desktop': {
        min: '1000px',
        max: '1400px'
    },
    'windscreen': {
      min: '1400px',
      max: '2000px'
  },
},

    extend: {
      fontFamily: {
        "montserrat": "Montserrat, sans-serif",
        "roboto": "Roboto, sans-serif"
      },

      colors: {
        Branco: '#FFFFFF',
        Preto: '#000000',
        Amarelo: '#FFCC00',
        Azul: ' #2084EAFF',
        Banner: '#1396d8'
      },

      backgroundImage: {
        'Banner': "url('/images/Banner_Desktop.avif')",
        'Banner-Main': "url('/images/Banner.png')",
        'Banner-Main2': "url('/images/Banner-Main3.png')",
        'Banner-Mobile': "url('/images/Banner-Mobile.png')",
        'Banner-Tablet': "url('images/Banner-Tablet.png')"
      },
    },
  },
  plugins: [],
}

