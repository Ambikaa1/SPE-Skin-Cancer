import React from 'react';
import renderer from 'react-test-renderer';

import Review from "../Review";

const photo = "ABCD-EFGH-IJKL";
const name = "Test";
const comments = "Comment";
const id = 1;
const bodyPart = "Foot";

const DATE_TO_USE = new Date('2016');
const _Date = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;

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

