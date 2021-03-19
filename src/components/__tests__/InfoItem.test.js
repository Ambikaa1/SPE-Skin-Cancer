import React from 'react';
import renderer from 'react-test-renderer';

import InfoItem from "../InfoItem";

describe('<InfoItem />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InfoItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
