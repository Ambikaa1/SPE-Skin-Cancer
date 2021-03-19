import React from 'react';
import renderer from 'react-test-renderer';

import RightHomuncScreen from "../RightHomuncScreen";

describe('<RightHomuncScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<RightHomuncScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
