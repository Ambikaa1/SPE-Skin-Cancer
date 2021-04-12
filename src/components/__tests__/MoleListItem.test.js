import React from 'react';
import renderer from 'react-test-renderer';

import MoleListItem from "../MoleListItem";

describe('<MoleListItem />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<MoleListItem />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
