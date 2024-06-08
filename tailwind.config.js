module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Use Noto Sans as the default sans-serif font
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'pastel-purple': '#d1cfe2',
        'pastel-blue': '#d7e3fc',
        'pastel-teal': '#7ec4cf',
        'pastel-light': '#daeaf6',
        'pastel-electric': '#abc4ff',
        'light-black': '#44465f'
      }
    },
  },
  plugins: [],
}
