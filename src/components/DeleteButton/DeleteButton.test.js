import React from 'react';
import { mount } from 'enzyme';

// SUT
import DeleteButton from './DeleteButton';

test('DeleteButton calls onDelete with item id when button is clicked', () => {
    const itemId = 'item1';
    const onDelete = jest.fn();
    const wrapper = mount(
        <DeleteButton onDelete={onDelete} itemId={itemId} />
    );

    const button = wrapper.find('.DeleteButton');

    button.simulate('click');

    expect(onDelete).toBeCalledWith('item1');
});

