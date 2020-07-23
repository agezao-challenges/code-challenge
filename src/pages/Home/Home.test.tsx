import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders greeting message', () => {
  const { getByText } = render(<Home />);
  const greetingElement = getByText(/cool/i);
  expect(greetingElement).toBeInTheDocument();
});
