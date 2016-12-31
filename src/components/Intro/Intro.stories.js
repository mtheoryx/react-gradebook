import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Intro from './Intro';
import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';
import textCentered from '../../helpers/storybook-helpers/text-centered';

storiesOf('Intro', module)
    .addDecorator(maxWidthCentered)
    .addDecorator(textCentered)
    .add('Supplied Text', () => (<Intro text="Supplied Text"/>));
