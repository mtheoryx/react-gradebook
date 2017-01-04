import React from 'react';
import ReactDOM from 'react-dom';
import MinimumScore from './MinimumScore';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MinimumScore students=""/>, div);
});
