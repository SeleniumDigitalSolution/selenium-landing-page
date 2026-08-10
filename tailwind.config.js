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
        // ── ONLY kept for opacity-modifier utilities (bg-se-cyan/10, border-se-cyan/40, etc.) ──
        // ALL surface, background, and text colors are handled via CSS variables in style.css
        'se-cyan': {
          DEFAULT: '#0A64BC', // brand primary blue
          50:  '#E8F1FB',
          100: '#C5D9F4',
          200: '#9BBDE9',
          300: '#6B9FDB',
          400: '#0A64BC',
          500: '#084E93',
          600: '#063B6E',
        },
      },


      // ─────────────────────────────────────────────────
      // TYPOGRAPHY SYSTEM — UI Guideline v1.0
      // Heading: "Plus Jakarta Sans" (modern, warm, approachable)
      // Body:    "Inter" (highly legible on screen, enterprise-grade)
      // Mono:    "JetBrains Mono" (tech stack / code labels)
      // ─────────────────────────────────────────────────
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
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
        'glow-cyan':  '0 0 30px rgba(10, 100, 188, 0.20)',
        'glow-red':   '0 0 30px rgba(220, 38, 38, 0.20)',
        'card':       '0 2px 8px rgba(10, 100, 188, 0.08)',
        'card-hover': '0 8px 24px rgba(10, 100, 188, 0.12)',
        'nav':        '0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(10,100,188,0.08)',
        'hero-text':  '0 0 40px rgba(10, 100, 188, 0.15)',
      },

      // ─────────────────────────────────────────────────
      // GRADIENTS (stored as bg-gradient utilities)
      // ─────────────────────────────────────────────────
      backgroundImage: {
        // Primary light gradient (background meshes)
        'se-gradient':       'linear-gradient(135deg, #FFFAFF 0%, #F6F2F7 50%, #FFFAFF 100%)',
        'se-cyan-gradient':  'linear-gradient(135deg, #0A64BC 0%, #084E93 100%)',
        'se-red-gradient':   'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
        'se-chrome-gradient':'linear-gradient(135deg, #C8CDD6 0%, #8A909F 100%)',



        // Glow overlays (brand blue)
        'glow-cyan-radial':  'radial-gradient(circle, rgba(10,100,188,0.12) 0%, transparent 70%)',
        'glow-red-radial':   'radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)',

        // Subtle shimmer for cards
        'shimmer':           'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',

        // Section divider fades
        'fade-down':         'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.05) 100%)',
        'fade-up-dark':      'linear-gradient(0deg, var(--bg) 0%, transparent 100%)',
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
