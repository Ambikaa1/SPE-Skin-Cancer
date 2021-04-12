import React from 'react';
import renderer from 'react-test-renderer';

import Review from "../Review";

const photo = "ABCD-EFGH-IJKL";
const name = "Test";
const comments = "Comment";
const id = 1;
const bodyPart = "Foot";

describe('<Review /> Near', () => {
    let nextScreen = "helpNear";
    it('renders correctly', () => {
        const tree = renderer.create(<Review nextScreen = {nextScreen} photo = {photo} name = {name} comments = {comments} id = {id} bodyPart = {bodyPart} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<Review /> Far', () => {
    let nextScreen = "helpFar";
    it('renders correctly', () => {
        const tree = renderer.create(<Review nextScreen = {nextScreen} photo = {photo} name = {name} comments = {comments} id = {id} bodyPart = {bodyPart} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

