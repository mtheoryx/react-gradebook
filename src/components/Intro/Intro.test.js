import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Intro text="anything"/>, div);
});

it('should render the text passed in', () => {
    const wrapper = shallow(<Intro text="test string here" />);
    const text = <span>test string here</span>;

    expect(wrapper.contains(text)).toEqual(true);
});
