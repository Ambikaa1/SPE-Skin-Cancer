import React from 'react';
import renderer from 'react-test-renderer';

import PhotoSuccess from "../PhotoSuccess";

describe('<PhotoSuccess />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<PhotoSuccess />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
