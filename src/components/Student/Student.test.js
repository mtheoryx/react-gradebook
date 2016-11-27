import React from 'react';
import ReactDom from 'react-dom';
import Student from './Student';
import { shallow } from 'enzyme';

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
