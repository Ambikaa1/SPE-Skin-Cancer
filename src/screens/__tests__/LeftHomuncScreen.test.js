import React from 'react';
import renderer from 'react-test-renderer';

import LeftHomuncScreen from "../LeftHomuncScreen";

describe('<LeftHomuncScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<LeftHomuncScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
