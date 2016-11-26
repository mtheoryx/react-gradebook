import React from 'react';
import ReactDom from 'react-dom';
import Student from './Student';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Student name="test name" grade={5} />, div);
});

it('renders the passed in props', () => {
	const wrapper = shallow(<Student name="billy bob" grade={5}/>);
    const text = 'billy bob - 5';

    expect(wrapper.text()).toEqual(text);
});
