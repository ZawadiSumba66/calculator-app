import { render } from '@testing-library/react';
import React from 'react';
import Button from '../../components/Button';

it('renders a button correctly', () => {
  const { getByTestId } = render(<Button name="4" />);
  expect(getByTestId('button')).toHaveTextContent('4');
});
