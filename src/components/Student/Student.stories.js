import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
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
    .add('List Entry', () => (<Student student={mockStudent} />));
