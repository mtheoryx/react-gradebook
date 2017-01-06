//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDOM from 'react-dom';

//Subject Under Test
import AddStudent from './AddStudent';

describe('AddStudent component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
        ReactDOM.render(<AddStudent addStudent={() => {}}/>, div);
	});
});
