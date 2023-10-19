import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'Canvas': 'var(--background)',
        'primaryText': 'var(--primaryText)',
        'blue': '#4285F4',
        'red': '#DB4437',
        'yellow': '#F4B400',
        'green': '#0F9D58',
        'white': '#FFFFFF',
        'orange': '#cd5f00',
        'logo': '#D78032'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: false
  }
}

