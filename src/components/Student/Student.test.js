//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
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
        ReactDom.render(<Student student={ student } />, div);
    });

    it('renders the passed in props', () => {
        const student = {
            name: 'billy bob',
            grade: 5
        };
    	const wrapper = shallow(<Student student={ student } />);
        const text = 'billy bob - 5';

        expect(wrapper.text()).toContain(text);
    });
    it('Has a delete button', () => {
        const student = {
            name: 'Deleted',
            grade: 100
        };

        const renderer = TestUtils.createRenderer();
        renderer.render(<Student student={student} />);

        const actual = renderer.getRenderOutput();

        const expected = <button className="deleteStudent" onClick={function noRefCheck() {}} > &times; </button> ;

        expect(actual).toIncludeJSX(expected);
    });

});

