import React from 'react';
import renderer from 'react-test-renderer';
import DeleteButton from './DeleteButton';

test('Delete button renders correctly', () => {
    const onDelete = () => {};
    const itemId = 'item1';
    const rendered = renderer.create(
        <DeleteButton onDelete={onDelete} itemId={itemId}/>
    );

    expect(rendered.toJSON()).toMatchSnapshot();
});
