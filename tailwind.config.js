module.exports = {
  node: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset:{
      '0': '0',
      '38': '38rem',
      '36': '36rem',
      '31': '31rem',
      '33': '33rem',
      '5': '5rem',
      '17': '17rem', 
      '20': '20rem',
      '10': '10rem', 
      '16': '16rem',
      '14': '14rem',
      '11': '11rem',  
      '8': '8rem',
      '2': '2rem',
      '19': '19rem',
      '47': '47rem', 
      '40': '40rem',
      '42': '42rem',
    },
    extend: {},
    fontFamily:{
      body:['RocknRoll One']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
