import { render } from '@testing-library/react';

import QRCode from '.';

describe('QRCode', () => {
  it('renders without crashing', () => {
    const { container } = render(<QRCode value="test" />);
    expect(container).toBeTruthy();
  });
});
