import React from 'react';
import renderer from 'react-test-renderer';

import MoleCountdown from "../MoleCountdown";

describe('<MoleCountdown />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MoleCountdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
