module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          300: '#fda4af'
        },
        indigo: {
          300: '#a5b4fc'
        },
        amber: {
          200: '#fde68a'
        }
      },
      fontFamily: {
        mochiy: ['"Mochiy Pop One"', 'sans-serif']
      }
    }
  },
  plugins: []
};
