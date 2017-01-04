import React from 'react';
import ReactDOM from 'react-dom';
import MaximumScore from './MaximumScore';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MaximumScore students=""/>, div);
});
