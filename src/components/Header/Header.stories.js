import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from './Header';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';
import textCentered from '../../helpers/storybook-helpers/text-centered';

storiesOf('Header', module)
    .addDecorator(maxWidthCentered)
    .addDecorator(textCentered)
    .add('Default View', () => (<Header />))
    .add('Supplied Text', () => (<Header text="Supplied Text"/>));
