import React from 'react';
import renderer from 'react-test-renderer';

import WhySCQOLIT from "../WhySCQOLIT";

describe('<WhySCQOLIT />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<WhySCQOLIT />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
