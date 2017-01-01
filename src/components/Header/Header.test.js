//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDom from 'react-dom';
import Header from './Header';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';
//noinspection JSUnresolvedVariable
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('Header > ', () => {
    it('renders without crashing', () => {
    	const div = document.createElement('div');
    	ReactDom.render(<Header />, div);
    });

    it('should render text passed in', () => {
    	const wrapper = shallow(<Header text="some text" />);
    	const testText = <h2>Some Text</h2>;

    	expect(wrapper.contains(testText)).toEqual(true);
    });
    it('should be selectable by class "Header"', () => {
        expect(shallow(<Header />).is('.Header')).toBe(true);
    });
    it('should render to static HTML', () => {
        expect(render(<Header />).text()).toEqual('Sample Text');
        expect(render(<Header text="some text"/>).text()).toEqual('Some Text');
    });
    it('should render the header exactly', () => {
    	const renderer = TestUtils.createRenderer();

    	renderer.render(<Header text="some awesome header text" />);

        const actual = renderer.getRenderOutput();
        const expected = <h2>Some Awesome Header Text</h2>;

    	expect(actual).toIncludeJSX(expected);
    });
});
