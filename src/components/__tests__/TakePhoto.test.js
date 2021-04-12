import React from 'react';
import renderer from 'react-test-renderer';

import TakePhoto from "../TakePhoto";

describe('<TakePhoto />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<TakePhoto />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
