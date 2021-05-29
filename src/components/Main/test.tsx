import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should have a standard text', () => {
    render(<Main />);

    expect(
      screen.getByText(
        /Template and standard settings for creating projects and tests from the Rube agency, using Jest, Husky, Nextjs\./i
      )
    ).toBeInTheDocument();
  });
  it('should have a Rube Agency Logo', () => {
    render(<Main />);

    expect(screen.getByAltText(/Agência Rube/i)).toBeInTheDocument();
  });
});
