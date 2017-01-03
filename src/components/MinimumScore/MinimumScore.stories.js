import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MinimumScore from './MinimumScore';
// import maxWidthCentered from '../../helpers/storybook-helpers/max-width-centered';

import Data from '../../data/demo';

storiesOf('Minimum Score', module)
    .add('No Data', () => (<MinimumScore students=""/>))
    .add('With Sample Data', () => (<MinimumScore  students={ Data }/>));
