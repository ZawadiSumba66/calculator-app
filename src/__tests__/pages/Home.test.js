import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../../components/Home';

it('matches the Home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
