import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Student from './Student';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';
import listItemNotInAList from '../../helpers/storybook-helpers/listitem-not-in-a-list';

const mockStudent = {
    name: 'Joe Smith',
    grade: 100
};

storiesOf('Student', module)
    .addDecorator(maxWidthCentered)
    .addDecorator(listItemNotInAList)
    .add('Default', () => (<Student student={mockStudent} deleteStudent={function noRefCheck() {}} studentId={'student1'}/>));
