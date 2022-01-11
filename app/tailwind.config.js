/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'wood-white': 'url(/wood-white.webp)',
        'wood-100': 'url(/wood-100.webp)',
        'wood-200': 'url(/wood-200.webp)',
        'wood-300': 'url(/wood-300.webp)',
        'wood-400': 'url(/wood-400.webp)',
        'wood-500': 'url(/wood-500.webp)',
        'wood-600': 'url(/wood-600.webp)'
      },
      textColor: {
        default: '#653b20',
        'wood-100': '#f6d39d',
        'wood-200': '#e3ba84',
        'wood-300': '#c38654',
        'wood-400': '#653b20',
        'wood-500': '#3a251c'
      },
      placeholderColor: theme => theme('textColor'),
      borderColor: {
        default: '#3a251c',
        'wood-100': '#f6d39d',
        'wood-200': '#e3ba84',
        'wood-300': '#c38654',
        'wood-400': '#653b20',
        'wood-500': '#3a251c'
      },
      boxShadow: {
        around: '0 0 2px 2px rgba(0, 0, 0, 0.1)',
        inner: 'inset 0 0 2px 2px rgba(0, 0, 0, 0.1)'
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        13: '3.25rem',
        18: '4.5rem',
        22: '5.5rem',
        84: '21rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px'
    },
    fontFamily: {
      serif: ['Anaktoria']
    },
    textShadow: {
      default: '0 0 1px rgba(0, 0, 0, 0.3)'
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-typography')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true
  }
}
