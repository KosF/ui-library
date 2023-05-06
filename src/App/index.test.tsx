import { render, screen } from '@testing-library/react';

import App from '.';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
