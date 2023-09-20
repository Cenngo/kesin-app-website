/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing-pattern': 
          "url('/bg-pattern.svg'), linear-gradient(90deg, #4C8EE2, #764BE2);"
      },
      colors: {
        primary: '#4C8EE2',
        secondary: '#112557',
        tertiary: '#764BE2',
        highlight: '#0D4E97',
        'card-border': '#ADCEFF',
        'card-light': '#E4EFFF',
        b: '#2A2A2A',
        background: '#E1E1E1'
      },
      data: {
        selected: 'selected="true"',
        invalid: 'invalid="true"',
        open: 'isOpen="true"',
        active: 'active="true"'
      }
    },
  },
  plugins: [],
}
