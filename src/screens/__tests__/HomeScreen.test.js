import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from "../HomeScreen";

describe('<HomeStack />', () => {
  it('renders correctly', () => {
    // 0 === 0;
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
