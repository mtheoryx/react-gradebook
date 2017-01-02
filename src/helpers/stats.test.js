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

	it('should return 0 when not passed anything', () => {
		const actual = min();
        const expected = 0;

        expect(actual).toEqual(expected);
	});

	it('should return 0 for array that as a min 0 in it', () => {
		const testData = [ 0, 100, 1000 ];
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
});

describe('max test', () => {
	it('should return 0 for empty array', () => {
        const testData = [];
        const actual = max(testData);
        const expected = 0;

        expect(actual).toEqual(expected);
	});

	it('should return 0 when not passed anything', () => {
		const actual = max();
        const expected = 0;

        expect(actual).toEqual(expected);
	});

	it('should return 50 for a single entry with 50 in it', () => {
        const testData = [50];
        const actual = max(testData);
        const expected = 50;

        expect(actual).toEqual(expected);
    });

	it('should return 100 for array with a high score of 100 in it', () => {
        const testData = [ 0, 10, 23, 55, 100 ];
        const actual = max(testData);
        const expected = 100;

        expect(actual).toEqual(expected);
	});
});

xdescribe('avg test', () => {
	it('should return 0 for empty array', () => {
        const testData = [];
        const actual = avg(testData);
        const expected = 0;

        expect(actual).toEqual(expected);
	});

	it('should return 50 for array of two values, 0 and 100', () => {
        const testData = [ 0, 100 ];
        const actual = avg(testData);
        const expected = 50;

        expect(actual).toEqual(expected);
	});
});
