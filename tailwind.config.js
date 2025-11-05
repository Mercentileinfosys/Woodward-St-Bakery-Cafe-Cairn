/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1612',
        secondary: '#c9a468',
        accent: '#d4af7a',
        dark: '#0a0a0a',
        light: '#f5f5f5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'zoom-in': 'zoomIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-up': 'bounceUp 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.6s ease-out',
        'rotate-in': 'rotateIn 0.8s ease-out',
        'float-3d': 'float3d 4s ease-in-out infinite',
        'swing-3d': 'swing3d 2.5s ease-in-out infinite',
        'pulse-3d': 'pulse3d 2s ease-in-out infinite',
        'flip': 'flip 2s ease-in-out infinite',
        'tilt': 'tilt 3s ease-in-out infinite',
        'rotate-360': 'rotate360 3s linear infinite',
        'bounce-3d': 'bounce3d 2.5s ease-in-out infinite',
        'shimmer-3d': 'shimmer3d 2s ease-in-out infinite',
        'parallax-shift': 'parallaxShift 4s ease-in-out infinite',
        'morphing': 'morphing 4s ease-in-out infinite',
        'wave-motion': 'waveMotion 2.5s ease-in-out infinite',
        'spiral-spin': 'spiralSpin 4s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-in-rotate': 'slideInRotate 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slide-in-rotate-right': 'slideInRotateRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pop-in': 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'float-wobble': 'floatWobble 3.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(201, 164, 104, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(201, 164, 104, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        bounceUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(-20px)' },
          '75%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-30px) rotateX(10deg)' },
        },
        swing3d: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(15deg)' },
        },
        pulse3d: {
          '0%, 100%': { transform: 'scale(1) rotateZ(0deg)' },
          '50%': { transform: 'scale(1.05) rotateZ(2deg)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        tilt: {
          '0%, 100%': { transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'perspective(1200px) rotateX(8deg) rotateY(8deg)' },
          '50%': { transform: 'perspective(1200px) rotateX(0deg) rotateY(15deg)' },
          '75%': { transform: 'perspective(1200px) rotateX(-8deg) rotateY(8deg)' },
        },
        rotate360: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
        bounce3d: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '25%': { transform: 'translateY(-20px) rotateX(5deg)' },
          '50%': { transform: 'translateY(-40px) rotateX(10deg)' },
          '75%': { transform: 'translateY(-20px) rotateX(5deg)' },
        },
        shimmer3d: {
          '0%': { transform: 'translateX(-100%) rotateY(-20deg) skewX(10deg)' },
          '50%': { transform: 'translateX(0%) rotateY(0deg) skewX(0deg)' },
          '100%': { transform: 'translateX(100%) rotateY(20deg) skewX(-10deg)' },
        },
        parallaxShift: {
          '0%, 100%': { transform: 'translateZ(0px) rotateX(0deg)' },
          '50%': { transform: 'translateZ(50px) rotateX(5deg)' },
        },
        morphing: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '58% 42% 42% 58% / 58% 58% 42% 42%' },
          '50%': { borderRadius: '70% 30% 30% 70% / 30% 70% 70% 30%' },
          '75%': { borderRadius: '42% 58% 58% 42% / 42% 42% 58% 58%' },
        },
        waveMotion: {
          '0%, 100%': { transform: 'translateX(0px) skewY(0deg)' },
          '25%': { transform: 'translateX(10px) skewY(2deg)' },
          '50%': { transform: 'translateX(0px) skewY(0deg)' },
          '75%': { transform: 'translateX(-10px) skewY(-2deg)' },
        },
        spiralSpin: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(201, 164, 104, 0.3), 0 0 40px rgba(212, 175, 122, 0.2)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(201, 164, 104, 0.6), 0 0 80px rgba(212, 175, 122, 0.4)'
          },
        },
        slideInRotate: {
          '0%': { 
            transform: 'translateX(-100px) rotateY(-45deg) rotateZ(-10deg)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0) rotateY(0) rotateZ(0)',
            opacity: '1',
          },
        },
        slideInRotateRight: {
          '0%': { 
            transform: 'translateX(100px) rotateY(45deg) rotateZ(10deg)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0) rotateY(0) rotateZ(0)',
            opacity: '1',
          },
        },
        popIn: {
          '0%': { 
            transform: 'scale(0.5) rotateX(-90deg) rotateY(-90deg)',
            opacity: '0',
          },
          '100%': { 
            transform: 'scale(1) rotateX(0) rotateY(0)',
            opacity: '1',
          },
        },
        floatWobble: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateZ(0deg) skewX(0deg)',
          },
          '25%': { 
            transform: 'translateY(-15px) rotateZ(2deg) skewX(-1deg)',
          },
          '50%': { 
            transform: 'translateY(-25px) rotateZ(-1deg) skewX(0deg)',
          },
          '75%': { 
            transform: 'translateY(-15px) rotateZ(-2deg) skewX(1deg)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
