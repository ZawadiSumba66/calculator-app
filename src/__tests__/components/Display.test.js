import { render } from '@testing-library/react';
import React from 'react';
import Display from '../../components/Display';

it('should have a 0 value for default display', () => {
  const { getByTestId } = render(<Display />);
  expect(getByTestId('display')).toHaveTextContent('0');
});

it('should not have any other default display value', () => {
  const { getByTestId } = render(<Display />);
  expect(getByTestId('display')).not.toHaveTextContent('5');
});
