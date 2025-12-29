/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nebula': {
          50: '#fef1f9',
          100: '#fee5f4',
          200: '#feccea',
          300: '#fda2d7',
          400: '#f968b9',
          500: '#eb008b',
          600: '#d9177b',
          700: '#bc0c5e',
          800: '#9b0d4e',
          900: '#821044',
          950: '#500124',
        },
        'cosmos': {
          50: '#eef1ff',
          100: '#e0e5ff',
          200: '#c7cfff',
          300: '#a4acff',
          400: '#7f7fff',
          500: '#6158f9',
          600: '#5239ee',
          700: '#462ad3',
          800: '#3a24ab',
          900: '#190a61',
          950: '#0d0538',
        },
        'void': {
          50: '#f6f6f7',
          100: '#e2e3e6',
          200: '#c4c6cd',
          300: '#9fa1ac',
          400: '#7b7d8a',
          500: '#60626f',
          600: '#4c4d58',
          700: '#3e3f48',
          800: '#35363d',
          900: '#131318',
          950: '#09090c',
        }
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'body': ['"Outfit"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
