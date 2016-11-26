import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<Header text="whatever" />, div);
});

it('should render text passed in', () => {
	const wrapper = shallow(<Header text="some text" />);
	const testText = <h2>some text</h2>;

	expect(wrapper.contains(testText)).toEqual(true);
});
