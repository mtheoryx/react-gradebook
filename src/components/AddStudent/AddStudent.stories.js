import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';

import AddStudent from './AddStudent';

storiesOf('AddStudent', module)
    .addDecorator(maxWidthCentered)
    .add('Default', () => (<AddStudent />));
