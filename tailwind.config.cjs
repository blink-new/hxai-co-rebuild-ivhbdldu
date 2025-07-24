/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0066CC',
          600: '#0052a3',
          700: '#003d7a',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#00A86B',
          600: '#008656',
          700: '#006441',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
      },
    },
  },
  plugins: [],
}