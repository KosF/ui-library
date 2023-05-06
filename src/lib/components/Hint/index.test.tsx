import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Hint from '.';

describe('Hint', () => {
  it('renders without crashing', async () => {
    const messageText = 'Text';
    const testid = 'hint';
    render(
      <Hint title={messageText}>
        <div data-testid={testid} />
      </Hint>
    );

    await userEvent.hover(screen.getByTestId(testid));
    expect(await screen.findByText(messageText)).toBeInTheDocument();
  });
});
