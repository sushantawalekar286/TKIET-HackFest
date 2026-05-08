module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#020617',
        electricPurple: '#8B5CF6',
        electricBlue: '#3B82F6',
        electricCyan: '#22D3EE',
      },
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        glowPurple: '0 0 50px rgba(139, 92, 246, 0.35)',
        glowBlue: '0 0 50px rgba(59, 130, 246, 0.3)',
        glass: '0 24px 80px rgba(2, 6, 23, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.95' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
