import React from 'react';
import { mount } from 'enzyme';
import sampleData from '../../data/demo';
//Subject under test
import App from './App';


test('It renders a predefined list of starting student entries', () => {
    const numberOfStudents = Object.keys(sampleData).length;
    const wrapper = mount( <App /> );
    const renderedStudents = wrapper.find('.Students').find('.student-entry').length;

    expect(renderedStudents).toEqual(numberOfStudents);
});


