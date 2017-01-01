//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDOM from 'react-dom';

import DeleteButton from './DeleteButton';

describe('DeleteButton component', () => {
	it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DeleteButton itemId={'student1'} onDelete={() => {}}/>, div);
	});
});
