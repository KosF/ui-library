import { render, screen } from '@testing-library/react';

import Spinner from '.';

describe('Spinner', () => {
  it('renders without crashing', () => {
    render(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
