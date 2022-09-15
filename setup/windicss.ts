import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

const plugin = require('windicss/plugin')

const aspectRatioPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.aspect-none': {
      aspectRatio: 'none',
    },
    '.aspect-16-9': {
      aspectRatio: '16/9',
    },
    '.aspect-4-3': {
      aspectRatio: '4/3',
    },
    '.aspect-1-1': {
      aspectRatio: '1/1',
    },
  }
  addUtilities(newUtilities, ['responsive', 'hover'])
})

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        title: ['Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace'],
      },
    }
  },
  plugins: [
    aspectRatioPlugin,
    plugin(function ({ addUtilities, variants }) {
      const newUtilities = {
        '.flip-y': {
          '--tw-scale-y': '-1 !important',
        },
        '.flip-x': {
          '--tw-scale-x': '-1 !important',
        },
      }
      addUtilities(newUtilities, variants('flip'))
    }),
  ],
}))
