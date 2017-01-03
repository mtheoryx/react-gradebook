import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Summary from './Summary';
import Data from '../../data/demo';

storiesOf('Summary', module)
    .add('No Data', () => (<Summary students="" />))
    .add('Demo Data', () => (<Summary students={ Data } />));
