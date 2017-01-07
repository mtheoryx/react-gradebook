//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

//Subject under test
import Student from './Student';

describe('Student component >', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const student = {
            name: 'test name',
            grade: 5
        };
        ReactDom.render(<Student student={ student } deleteStudent={() => {}} studentId={'student1'} />, div);
    });
});

