//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import ReactDom from 'react-dom';
import Header from './Header';
import { shallow, mount, render } from 'enzyme';
import expect from 'expect';

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
    it('should mount in full DOM', () => {
    	expect(mount(<Header />).find('.Header h2').length).toBe(1);
    });
    it('should render to static HTML', () => {
        expect(render(<Header />).text()).toEqual('');
        expect(render(<Header text="some text"/>).text()).toEqual('Some Text');
    });
});
