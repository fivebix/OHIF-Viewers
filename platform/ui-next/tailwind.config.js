/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../ui/tailwind.config.js')],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.6875rem', // 11px
      sm: '0.75rem', // 12px
      base: '0.8125rem', // 13px
      lg: '0.875rem', // 14px
      xl: '1rem', // 16px
      // 2xl and above will be updated in an upcoming version
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // '2xl': '1.125rem', // 18px
      // '3xl': '1.375rem', // 22px
      // '4xl': '1.5rem', // 24px
      // '5xl': '1.875rem', // 30px
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      colors: {
        highlight: '#46CC34',
        neutral: '#808080',
        'neutral-light': '#e1e1e1',
        'neutral-dark': '#363637',
        border: '#277F81',    // Teal borders for contrast on black
        input: '#1A1A1B',     // Very dark gray for inputs
        ring: '#277F81',
        background: '#000000', // Primary Black
        foreground: '#ffffff',
        primary: {
          DEFAULT: '#000000',  // Primary Black
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#277F81',  // Secondary Teal
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#e53e3e',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#363637',
          foreground: '#808080',
        },
        accent: {
          DEFAULT: '#277F81',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#1A5556',  // Dark Teal
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      bkg: {
        low: '#000000',
        med: '#1A5556',
        full: '#277F81',
      },
      info: {
        primary: '#FFFFFF',
        secondary: '#277F81',
      },
      actions: {
        primary: '#0263D1',
        highlight: '#46CC34',
        hover: 'rgba(39, 127, 129, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
