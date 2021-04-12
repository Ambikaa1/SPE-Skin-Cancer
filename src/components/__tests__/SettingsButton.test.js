import React from 'react';
import renderer from 'react-test-renderer';

import SettingsButton from "../SettingsButton";

jest.mock('@react-navigation/native');

describe('<SettingsButton />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SettingsButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
