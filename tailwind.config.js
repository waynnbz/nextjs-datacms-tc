const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        frankRuhlLibre: ["var(--frank-ruhl-libre)", ...defaultTheme.fontFamily.sans ],
        helveticaNowBold: ["var(--helvetica-now-bold)", ...defaultTheme.fontFamily.sans ],
        helveticaNowMedium: ["var(--helvetica-now-medium)", ...defaultTheme.fontFamily.sans ],
        helveticaNow: ["var(--helvetica-now)", ...defaultTheme.fontFamily.sans ],
        helveticaNowLight: ["var(--helvetica-now-light)", ...defaultTheme.fontFamily.sans ],
        mulish: ["var(--mulish)", ...defaultTheme.fontFamily.sans ],
      },
      fontSize: {
        '3xl': '2rem',
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}
