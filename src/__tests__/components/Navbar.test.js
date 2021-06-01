import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';

it('should render the correct buttons for the calculator', () => {
  const { getByTestId } = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(getByTestId('navbar')).toHaveTextContent('Math Magicians');
  expect(getByTestId('navbar')).toHaveTextContent('Home');
  expect(getByTestId('navbar')).toHaveTextContent('Quote');
  expect(getByTestId('navbar')).toHaveTextContent('Calculator');
});
