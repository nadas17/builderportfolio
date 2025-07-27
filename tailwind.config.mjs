/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#FBBF24', // A slightly richer yellow
          'primary-dark': '#F59E0B',
          'secondary': '#374151', // Dark cool gray
          'secondary-dark': '#1F2937',
          'light': '#F9FAFB', // Off-white
          'dark': '#111827', // Almost black
        },
        'construction': {
          'yellow': '#FBBF24',
          'orange': '#F59E0B',
          'dark-gray': '#374151',
          'black': '#1F2937',
          'light-gray': '#F9FAFB',
          'gradient': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
        }
      },
      textColor: {
        'construction-black': '#1F2937',
        'construction-yellow': '#FBBF24',
        'construction-orange': '#F59E0B',
        'construction-dark-gray': '#374151',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'construction-gradient': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
      }
    },
  },
  plugins: [],
}
