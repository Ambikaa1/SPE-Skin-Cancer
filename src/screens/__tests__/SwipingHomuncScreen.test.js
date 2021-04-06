import React from 'react';
import renderer from 'react-test-renderer';
import SwipingHomuncScreen from "../SwipingHomuncScreen";


describe('<SwipingHomuncScreen />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SwipingHomuncScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
