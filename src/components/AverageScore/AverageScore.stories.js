import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AverageScore from './AverageScore';
import Data from '../../data/demo';

storiesOf('Average Score', module)
    .add('No Data', () => (<AverageScore students=""/>))
    .add('With Sample Data', () => (<AverageScore  students={ Data }/>));
