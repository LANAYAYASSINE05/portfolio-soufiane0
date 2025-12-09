/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          // Brand colors
          'brand-blue': '#0077B6',        // Blue Petrol - Accent color
          'brand-light': '#ECF6FF',       // Light blue - Background accents
          
          // Theme colors
          'primary': '#0077B6',           // Main brand color (Blue Petrol)
          'accent': '#0077B6',            // Accent color (Blue Petrol)
          'background': '#FFFFFF',        // Background (White)
          'text': '#333333',              // Primary text (Dark Gray)
          'text-light': '#666666',        // Light text
          'text-muted': '#999999',        // Muted text
          
          // Additional colors
          'accent-blue': '#0077B6',
          'accent-orange': '#00B4D8',
          'secondary': '#E5E5E5',
        },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 0.3s ease-in-out',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        pulseNeon: {
          '0%, 100%': { 
            boxShadow: '0 0 5px #0077B6, 0 0 10px #0077B6, 0 0 15px #0077B6',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 10px #0077B6, 0 0 20px #0077B6, 0 0 30px #0077B6',
            opacity: '0.8'
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #0077B6, 0 0 10px #0077B6, 0 0 15px #0077B6',
          },
          '100%': { 
            boxShadow: '0 0 10px #0077B6, 0 0 20px #0077B6, 0 0 30px #0077B6',
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.dashboard-card': {
          '@apply bg-gray-800/50 p-4 rounded-lg border border-gray-700 shadow-sm backdrop-blur-sm': {},
        },
        '.container-custom': {
          '@apply max-w-7xl mx-auto': {},
        },
        '.glow-effect': {
          '@apply shadow-lg shadow-primary/20': {},
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
