module.exports = {
  content: ["./index.html", 
  "./public/js/*.js", 
],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
    },
    screens: {
      '12pro': '390px',

      'sm': '640px',

      'md': '768px',

      'ipad': '820px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

      '1920': '1920px'
    }
  },
},
  plugins: [],
}
