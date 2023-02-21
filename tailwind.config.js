module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'

  //colors ne treba extendat. mogu se prebrisat
  theme: {
    screens: {
      sm: '768px',
      md: '960px',
      lg: '1024px',
      xl: '1536px',
    },
    colors: {
      primary: {
        1: '#000000',
      },
      secondary: {
        1: '#ffffff',
        2: '#fefefe',
      },
      accent: {
        1: '#ffffff',
      },
      heading: '#000000',
      highlight: '#E70418',
      text: '#333333',
      link: '#333333',
      input: '#000000',
      transparent: 'transparent',
      error: '#E70418',
    },
    boxShadow: {},
    fontSize: {
      /*desktop*/
      lg_h1: ['48px', { lineHeight: '115%' }],
      lg_h2: ['40px', { lineHeight: '130%' }],
      lg_h3: ['36px', { lineHeight: '130%' }],
      lg_h4: ['24px', { lineHeight: '125%' }],
      lg_h5: ['18px', { lineHeight: '110%' }],

      lg_body: ['18px', { lineHeight: '150%' }],
      lg_body_20: ['20px', { lineHeight: '135%' }],
      lg_newsletter: ['24px', { lineHeight: '24px' }],
      lg_portfolio_title: ['24px', { lineHeight: '32px' }],
      lg_hint: ['14px', { lineHeight: '14px' }],
      lg_nav: ['32px', { lineHeight: '44px' }],
      lg_foot: ['16px', { lineHeight: '16px' }],
      lg_button_regular: ['18px', { lineHeight: '14px' }],
      lg_button_strong: ['36px', { lineHeight: '47px' }],
      /*mobile*/
      sm_h1: ['40px', { lineHeight: '115%' }],
      sm_h2: ['36px', { lineHeight: '110%' }],
      sm_h3: ['24px', { lineHeight: '125%' }],
      sm_h4: ['18px', { lineHeight: '110%' }],
      sm_h5: ['16px', { lineHeight: '110%' }],

      sm_body: ['16px', { lineHeight: '150%' }],
      sm_body_20: ['18px', { lineHeight: '135%' }],
      sm_newsletter: ['20px', { lineHeight: '24px' }],
      sm_portfolio_title: ['20px', { lineHeight: '135%' }],
      sm_hint: ['14px', { lineHeight: '14px' }],
      sm_nav: ['30px', { lineHeight: '40px' }],
      sm_foot: ['16px', { lineHeight: '16px' }],
      sm_button_regular: ['18px', { lineHeight: '14px' }],
      sm_button_strong: ['28px', { lineHeight: '47px' }],
    },

    fontFamily: {
      title: 'Gotham, sans-serif',
      body: 'Gotham, sans-serif',
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './plugins/**/*.vue',
    './static/**/*.vue',
    './store/**/*.vue',
  ],
}
