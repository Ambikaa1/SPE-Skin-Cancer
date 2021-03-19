import React from 'react';
import renderer from 'react-test-renderer';

import FrontHomuncScreen from "../FrontHomuncScreen";

describe('<FrontHomuncScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<FrontHomuncScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
