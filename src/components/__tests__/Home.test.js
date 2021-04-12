import React from 'react';
import renderer from 'react-test-renderer';

import Home from "../HeaderText";

describe('<Home />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
