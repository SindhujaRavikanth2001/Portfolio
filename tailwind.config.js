/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',      // Dark blue background
        secondary: '#38bdf8',    // Light blue accent
        accent: '#60a5fa',       // Additional blue shade
        textPrimary: '#f8fafc',  // Light text
        textSecondary: '#94a3b8', // Muted text
        cardBg: '#1e293b',       // Darker card background
        hoverBg: '#334155',      // Hover state background
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
} 