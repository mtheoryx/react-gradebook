import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MaximumScore from './MaximumScore';
import Data from '../../data/demo';

storiesOf('Maximum Score', module)
    .add('No Data', () => (<MaximumScore students="" />))
    .add('With Sample Data', () => (<MaximumScore students={ Data }/>));
