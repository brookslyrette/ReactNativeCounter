import 'react-native';
import React from 'react';
import Counter from './Counter.js';

import renderer from 'react-test-renderer';

test('Counter renders properly', () => {
  const tree = renderer.create(
    <Counter
      increment={() => {}}
      decrement={() => {}}
      reset={() => {}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
