import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MinimumScore from './MinimumScore';
import Data from '../../data/demo';

storiesOf('Minimum Score', module)
    .add('No Data', () => (<MinimumScore students=""/>))
    .add('With Sample Data', () => (<MinimumScore  students={ Data }/>));
