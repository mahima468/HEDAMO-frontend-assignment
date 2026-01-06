/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#64748B',
        calmBlue: '#3B82F6',
        premiumGray: '#F3F4F6',
        premiumDark: '#111827'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif']
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.03)',
        'soft-md': '0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -1px rgba(0,0,0,0.04)'
      },
      transitionDuration: {
        150: '150ms',
        200: '200ms',
        250: '250ms'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
