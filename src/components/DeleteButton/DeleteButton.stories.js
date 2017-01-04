import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DeleteButton from './DeleteButton';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';

storiesOf('DeleteButton', module)
    .addDecorator(maxWidthCentered)
    .add('Default', () => (<DeleteButton onDelete={ action('delete-button-click') } itemId={'student1'}/>));
