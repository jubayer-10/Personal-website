/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
          poppins : ['Poppins','sans-serif'],
    },
    extend: {
      animation : {
        'up-down': 'down 6s linear infinite',
        'right': 'right 22s linear infinite',
        'left': 'right 22s linear infinite',
      },
      keyframes: {
       'down': {
        '0%, 100%': { transform: 'translateY(10px)' },
        '50%': { transform: 'translateY(0px)' },
       },
       'right': {
        '0%, 100%': { transform: 'translateX(80%)' },
        '50%': { transform: 'translateX(0%)' },
       },
       'left': {
        '0%, 100%': { transform: 'translateX(80%)' },
        '50%': { transform: 'translateX(0%)' },
       },
      },
    },
  },
  plugins: [],
}

