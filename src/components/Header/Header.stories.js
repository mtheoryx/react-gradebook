import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from './Header';

//Helper just for storybook viewing



storiesOf('Header', module)
    .addDecorator(story => (
        <div style={{textAlign: 'center'}}>
            { story() }
        </div>
    ))
    .add('Default View', () => (<Header />));
