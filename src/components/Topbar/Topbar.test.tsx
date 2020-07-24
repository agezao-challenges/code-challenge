import React from 'react';
import { render } from '../../utils/test-utils';
import Topbar from './Topbar';

test('renders the Topbar component', () => {
  const renderedTopbar = render(<Topbar />);

  const toggleButton = renderedTopbar.baseElement.querySelectorAll('button');
  expect(toggleButton).not.toBeNull();
});
