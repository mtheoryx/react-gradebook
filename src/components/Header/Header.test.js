import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

test('Header renders default text value', () => {
    const wrapper = mount(<Header />);
    const header = wrapper.find('h2');
    expect(header.text()).toBe('Sample Text');
});

test('Header renders the provided text in title case', () => {
    const wrapper = mount(<Header text="sample text to caps"/>);
    const header = wrapper.find('h2');
    expect(header.text()).toBe('Sample Text To Caps');
});
