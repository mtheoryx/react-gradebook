import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { WithNotes } from '@kadira/storybook-addon-notes';

import DeleteButton from './DeleteButton';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';

const deleteButtonNote = `
    This positioning of the X inside is pretty poor and should be fixed.
`;

storiesOf('DeleteButton', module)
    .addDecorator(maxWidthCentered)
    .add('Default', () => (
        <WithNotes notes={ deleteButtonNote } >
            <DeleteButton onDelete={ action('delete-button-click') } itemId={'student1'} />
        </WithNotes>
    ));
