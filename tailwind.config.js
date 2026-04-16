/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────────
      // SELENIUM BRAND COLOR SYSTEM
      // Inspired by Selenium (Se, Atomic No. 34):
      //   - Metallic gray allotrope   → backgrounds & surfaces
      //   - Bioluminescent cyan       → primary accent / energy
      //   - Allotrope red             → secondary accent / CTA
      //   - Metallic silver           → text & UI elements
      // ─────────────────────────────────────────────────
      colors: {
        // Backgrounds (metallic dark allotrope hierarchy)
        'se-void':       '#080A0F', // Deepest void — page root bg
        'se-dark':       '#0D0E14', // Primary background
        'se-surface':    '#141720', // Elevated cards & panels
        'se-panel':      '#1C2032', // Modals, popovers
        'se-border':     '#252A3A', // Dividers & subtle borders
        'se-border-dim': '#1A1F2E', // Ultra-subtle separators

        // Text (metallic silver spectrum)
        'se-white':      '#F0F2F5', // Primary text
        'se-silver':     '#B8BDD0', // Secondary text
        'se-muted':      '#6B7394', // Placeholder, labels
        'se-faint':      '#3A4060', // Disabled states

        // Primary Accent — Bioluminescent Cyan (digital energy / spark of life)
        'se-cyan': {
          DEFAULT: '#00D4FF',
          50:  '#E5FBFF',
          100: '#B8F4FF',
          200: '#7AEBFF',
          300: '#3DDFFF',
          400: '#00D4FF', // ← PRIMARY CYAN ACCENT
          500: '#00B8E5',
          600: '#0090C2',
          700: '#006B99',
          800: '#004A70',
          900: '#002A47',
        },

        // Secondary Accent — Deep Allotrope Red (vital energy)
        'se-red': {
          DEFAULT: '#E8214A',
          50:  '#FFF0F3',
          100: '#FFD6DE',
          200: '#FFA8BB',
          300: '#FF7096',
          400: '#E8214A', // ← PRIMARY RED ACCENT
          500: '#C41840',
          600: '#A01036',
          700: '#7C0A2B',
          800: '#580420',
          900: '#340015',
        },

        // Metallic silver gradients (Porsche-inspired chrome)
        'se-chrome': {
          100: '#E8EBF2',
          200: '#C8CDD6',
          300: '#A8ADD6',
          400: '#8A909F',
          500: '#6C7085',
        },
      },

      // ─────────────────────────────────────────────────
      // TYPOGRAPHY SYSTEM
      // Primary: "Inter" (precision/tech)
      // Display: "Outfit" (bold, modern luxury headers)
      // Mono: "JetBrains Mono" (tech stack / code labels)
      // ─────────────────────────────────────────────────
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 7vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-xl':  ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg':  ['clamp(1.75rem, 3.5vw, 3rem)',{ lineHeight: '1.1',  letterSpacing: '-0.015em',fontWeight: '700' }],
        'display-md':  ['clamp(1.25rem, 2.5vw, 2rem)',{ lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
      },

      // ─────────────────────────────────────────────────
      // SPACING & LAYOUT
      // ─────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '30':  '7.5rem',
        'section': '8rem',   // Standard section padding
        'hero':    '12rem',  // Hero-specific large spacing
      },
      maxWidth: {
        'content': '1280px',
        'narrow':  '768px',
        'wide':    '1440px',
      },

      // ─────────────────────────────────────────────────
      // ANIMATIONS
      // ─────────────────────────────────────────────────
      animation: {
        'fade-up':       'fadeUp 0.7s ease forwards',
        'fade-in':       'fadeIn 0.5s ease forwards',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'slide-right':   'slideRight 0.6s ease forwards',
        'float':         'float 6s ease-in-out infinite',
        'counter':       'counterUp 2s ease-out forwards',
        'shimmer':       'shimmer 2.5s linear infinite',
        'scan-line':     'scanLine 4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },

      // ─────────────────────────────────────────────────
      // BACKDROP BLUR & BOX SHADOWS (Glassmorphism)
      // ─────────────────────────────────────────────────
      backdropBlur: {
        'xs': '4px',
        'glass': '20px',
      },
      boxShadow: {
        'glow-cyan':  '0 0 30px rgba(0, 212, 255, 0.25)',
        'glow-red':   '0 0 30px rgba(232, 33, 74, 0.3)',
        'card':       '0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255,255,255,0.06) inset',
        'card-hover': '0 12px 48px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 212, 255, 0.12)',
        'nav':        '0 1px 0 rgba(255,255,255,0.05), 0 4px 32px rgba(0,0,0,0.6)',
        'hero-text':  '0 0 60px rgba(0, 212, 255, 0.3)',
      },

      // ─────────────────────────────────────────────────
      // GRADIENTS (stored as bg-gradient utilities)
      // ─────────────────────────────────────────────────
      backgroundImage: {
        // Primary dark gradient (background meshes)
        'se-gradient':       'linear-gradient(135deg, #0D0E14 0%, #141720 50%, #0D1018 100%)',
        'se-cyan-gradient':  'linear-gradient(135deg, #00D4FF 0%, #0090C2 100%)',
        'se-red-gradient':   'linear-gradient(135deg, #E8214A 0%, #7C0A2B 100%)',
        'se-chrome-gradient':'linear-gradient(135deg, #C8CDD6 0%, #8A909F 100%)',

        // Hero section mesh gradient
        'hero-mesh':         'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(0,212,255,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(232,33,74,0.08) 0%, transparent 60%)',

        // Glow overlays
        'glow-cyan-radial':  'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
        'glow-red-radial':   'radial-gradient(circle, rgba(232,33,74,0.2) 0%, transparent 70%)',

        // Subtle shimmer for cards
        'shimmer':           'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',

        // Section divider fades
        'fade-down':         'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
        'fade-up-dark':      'linear-gradient(0deg, #0D0E14 0%, transparent 100%)',
      },

      // ─────────────────────────────────────────────────
      // TRANSITION DURATIONS
      // ─────────────────────────────────────────────────
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.4, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
