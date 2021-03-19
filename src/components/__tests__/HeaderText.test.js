import React from 'react';
import renderer from 'react-test-renderer';

import HeaderText from "../HeaderText";

describe('<HeaderText />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
