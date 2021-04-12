import React from 'react';
import renderer from 'react-test-renderer';

import MoleCountdown from "../MoleCountdown";

describe('<MoleCountdown />', () => {
    mockItem = {nextUpdate: 0}
    it('renders correctly', () => {
        const tree = renderer.create(<MoleCountdown item = {mockItem} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
