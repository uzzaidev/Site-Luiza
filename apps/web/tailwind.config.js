/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Mapear tokens CSS para Tailwind
      colors: {
        // Cores semânticas usando CSS variables
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-active': 'var(--color-primary-active)',
        'primary-bg': 'var(--color-primary-bg)',
        'primary-fg': 'var(--color-primary-fg)',

        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'secondary-active': 'var(--color-secondary-active)',
        'secondary-bg': 'var(--color-secondary-bg)',
        'secondary-fg': 'var(--color-secondary-fg)',

        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-active': 'var(--color-accent-active)',
        'accent-fg': 'var(--color-accent-fg)',
        'accent-bg': 'var(--color-accent-bg)',

        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',

        // Cores de superfície e texto
        background: 'var(--color-background)',
        bg: 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        fg: 'var(--color-fg)',
        'fg-secondary': 'var(--color-fg-secondary)',
        'fg-muted': 'var(--color-fg-muted)',

        // Superfícies
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',

        // Bordas
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        'border-focus': 'var(--color-border-focus)',
      },

      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        base: 'var(--font-family-base)',
        mono: 'var(--font-family-mono)',
      },

      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
