import React from 'react';
import { mount } from 'enzyme';

//Subject under test
import Student from './Student';

test('Student name edit function called with correct arguments', () => {
    const updateStudent = jest.fn();

    const student = {
        name: 'Bill Someone',
        grade: 85
    };
    const studentUpdate = {
        name: 'Bill Somebody',
        grade: 85
    };
    const wrapper = mount(
        <Student student={ student } studentId={'student1'} updateStudent={ updateStudent }/>
    );
    const nameInput = wrapper.find('.editNameInput');

    nameInput.simulate('change', {target: {name: 'name', value: 'Bill Somebody'}});

    expect(updateStudent).toBeCalledWith('student1', studentUpdate);
});

test('Student grade edit function called with correct arguments', (() => {
    const updateStudent = jest.fn();

    const student = {
        name: 'Bill Someone',
        grade: 85
    };
    const studentUpdate = {
        name: 'Bill Someone',
        grade: 100
    };
    const wrapper = mount(
        <Student student={ student } studentId={'student1'} updateStudent={ updateStudent }/>
    );
    const gradeInput = wrapper.find('.editGradeInput');

    gradeInput.simulate('change', {target: {name: 'grade', value: '100'}});

    expect(updateStudent).toBeCalledWith('student1', studentUpdate);

}));
