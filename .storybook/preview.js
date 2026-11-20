import { withRouter } from 'storybook-addon-remix-react-router'

import '../src/styles/storybooks.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactRouter: {},
    options: {}
  },
  decorators: [withRouter],
};

export default preview;
