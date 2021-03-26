import React from 'react';
import renderer from 'react-test-renderer';

import HelpFarShotScreen from "../HelpFarShotScreen";

describe('<FrontHomuncScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<HelpFarShotScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
