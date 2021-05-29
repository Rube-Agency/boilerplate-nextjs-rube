import GlobalStyles from '../src/styles/globals';

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    );
  }
];
