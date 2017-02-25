/* global expect*/
import renderer from 'react-test-renderer';
import React from 'react';

/**
 * @description HO function that accept Component on first call and props object as second call
 * @param Component
 */
const matchComponentSnapshot = Component => props => {
  const rendered = renderer.create(
    <Component {...props} />
  ).toJSON();
  expect(rendered).toMatchSnapshot();
};

export default matchComponentSnapshot;
