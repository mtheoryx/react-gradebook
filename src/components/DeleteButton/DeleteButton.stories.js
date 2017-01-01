import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DeleteButton from './DeleteButton';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';

storiesOf('DeleteButton', module)
    .addDecorator(maxWidthCentered)
    .add('Default', () => (<DeleteButton onDelete={function mock() {}} itemId={'student1'}/>));
