/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0f172a',
        'brand-teal': '#14b8a6',
        'light-gray': '#f1f5f9',
        'infrastructure': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'gradient': 'gradient-shift 6s ease infinite',
        'construction': 'construction-pattern 20s linear infinite',
        'infrastructure-grid': 'infrastructure-grid 4s ease-in-out infinite',
      },
      backgroundImage: {
        'infrastructure-grid': 'linear-gradient(rgba(20, 184, 166, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)',
        'infrastructure-diagonal': 'linear-gradient(45deg, rgba(20, 184, 166, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(20, 184, 166, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(20, 184, 166, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(20, 184, 166, 0.1) 75%)',
        'infrastructure-dots': 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 2px, transparent 2px)',
        'infrastructure-lines': 'linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'infrastructure-grid': '40px 40px',
        'infrastructure-diagonal': '30px 30px',
        'infrastructure-dots': '30px 30px',
        'infrastructure-lines': '100px 100px',
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3), inset 0 0 20px rgba(20, 184, 166, 0.1)',
        'glow-teal-strong': '0 0 40px rgba(20, 184, 166, 0.6), inset 0 0 30px rgba(20, 184, 166, 0.2)',
        'infrastructure': '0 10px 30px rgba(20, 184, 166, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
