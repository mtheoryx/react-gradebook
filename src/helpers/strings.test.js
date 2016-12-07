import expect from 'expect';

// Subjects under test
import { titleCase } from './strings';

describe('strings utilities', () => {
	describe('titleCase method', () => {
        it('Should not require a string parameter', () => {
            const actual = titleCase();
            const expected = '';

            expect(actual).toEqual(expected);
        });
        it('Should title case a provided string', () => {
            const actual = titleCase('just a test');
            const expected = 'Just A Test';

        	expect(actual).toEqual(expected);
        });
	});
});
