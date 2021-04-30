import React from 'react';
import renderer from 'react-test-renderer';

import SurveyScreen2 from "../SurveyScreen2";

describe('<SurveyScreen2 />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SurveyScreen2 />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
