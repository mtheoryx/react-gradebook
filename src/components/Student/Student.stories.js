import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Student from './Student';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';

const mockStudent = {
    name: 'Joe Smith',
    grade: 100
};

storiesOf('Student', module)
    .addDecorator(maxWidthCentered)
    .add('Default', () => (<Student student={mockStudent} deleteStudent={function noRefCheck() {}} studentId={'student1'}/>));
