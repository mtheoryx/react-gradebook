//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import DeleteButton from './DeleteButton';

describe('DeleteButton component', () => {
	it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DeleteButton itemId={'student1'} onDelete={() => {}}/>, div);
	});
	it('handles a click event', () => {
		const onButtonClick = sinon.spy();
		const Btn = shallow(
			<DeleteButton onDelete={onButtonClick}  itemId={'student1'}/>
		);
		Btn.find('button').simulate('click');
		expect(onButtonClick.calledOnce).toEqual(true);
	});

});

