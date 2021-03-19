import React from 'react';
import renderer from 'react-test-renderer';

import HeaderButton from "../HeaderButton";

describe('<HeaderButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
