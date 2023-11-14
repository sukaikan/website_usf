/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}', 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
        fontFamily: {
          'prsans': ['Product Sans Medium Regular', 'sans-serif'],
        }

    },
  },
  plugins: [
    require('preline/plugin')
  ],
}

