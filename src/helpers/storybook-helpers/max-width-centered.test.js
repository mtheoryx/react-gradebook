//noinspection JSUnresolvedVariable
import React from 'react';
//noinspection JSUnresolvedVariable
import expect from 'expect';

// SUT
import MaxWidthCentered from './max-width-centered';

const underTest = MaxWidthCentered(() => {});

describe('Max Width Centered Content', () => {
    it('should render with centered props', () => {
        const actual = underTest.props.style;
        const expected = {
            maxWidth: '500px',
            margin: '0 auto'
        };
    	expect(actual).toEqual(expected);
    });
});
