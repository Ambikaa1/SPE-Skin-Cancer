import React from 'react';
import renderer from 'react-test-renderer';

import BackHomuncScreen from "../BackHomuncScreen";

describe('<BackHomuncScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<BackHomuncScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
