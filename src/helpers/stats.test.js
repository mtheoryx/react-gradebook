import expect from 'expect';

// Subjects under test
import { min, max, avg } from './stats';

describe('min test', () => {
	it('should return 0 for empty array', () => {
		const testData = [];
		const actual = min(testData);
		const expected = 0;

		expect(actual).toEqual(expected);
	});

	it('should return 10 for array that has a min 10 in it', () => {
        const testData = [ 100, 45, 33, 10 ];
        const actual = min(testData);
        const expected = 10;

        expect(actual).toEqual(expected);
	});

	xit('should return 100 for array that has a high score of 100 in it', () => {

	});
});

xdescribe('max test', () => {
	it('should return 0 for empty array', () => {

	});

	it('should return 100 for array with a high score of 100 in it', () => {

	});
});

xdescribe('avg test', () => {
	it('should return 0 for empty array', () => {

	});

	it('should return 50 for array of two values, 0 and 100', () => {

	});
});
