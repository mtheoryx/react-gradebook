import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

test('Header renders default text value', () => {
    const rendered = renderer.create(
        <Header />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
});

test('Header renders the provided text in title case', () => {
    const rendered = renderer.create(
        <Header text="sample text to caps" />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
});
