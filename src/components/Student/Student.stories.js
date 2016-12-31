import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Student from './Student';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';
import textCentered from '../../helpers/storybook-helpers/text-centered';

const mockStudent = {
    name: 'Joe Smith',
    grade: 100
};

storiesOf('Student', module)
    .addDecorator(maxWidthCentered)
    .addDecorator(textCentered)
    .add('List Entry', () => (<Student student={mockStudent} />));
