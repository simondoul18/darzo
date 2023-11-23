import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  corePlugins: {
    preflight: false,
    container: false
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "main-pink": {
          "100": "#ff73bf",
          "200": "#ff66b9",
          "300": "#ff59b3",
          "400": "#ff59b3",
          "500": "#ff40a7",
          "600": "#ff33a1",
          "700": "#ff269c",
          "800": "#ff1a96",
          "900": "#ff1192",
        },
        "main-tealish": {
          "100": "#627cc3",
          "200": "#5470be",
          "300": "#4665b8",
          "400": "#415daa",
          "500": "#3b559b",
          "600": "#364d8d",
          "700": "#30457f",
          "800": "#2b3e71",
          "900": "#253662",
        },
        "main-purple": {
          "100": "#AEA9F7",
          "200": "#9D96F5",
          "300": "#8279F2",
          "400": "#7066F1",
          "500": "#675DF0",
          "600": "#5E53EF",
          "700": "#554AEE",
          "800": "#483DE1",
          "900": "#443AD5",
        }
      },
      fontFamily: {
        'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
        'mono': ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },

    fontFamily: {
      'body': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
export default config
