import React from 'react';
import renderer from 'react-test-renderer';

import UserScreen from "../UserScreen";

describe('<UserScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UserScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
