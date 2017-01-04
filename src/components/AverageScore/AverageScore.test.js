import React from 'react';
import ReactDOM from 'react-dom';
import AverageScore from './AverageScore';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AverageScore students=""/>, div);
});
