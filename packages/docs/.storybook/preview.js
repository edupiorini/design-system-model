/** @type { import('@storybook/react').Preview } */
import {themes} from '@storybook/theming'


import '../global.css'




export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: '#333333' },
      { name: 'light', value: '#f8f8f8f8' },
    ],
  },
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
