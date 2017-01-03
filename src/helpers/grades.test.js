import expect from 'expect';
import { getGradesFromObject } from './grades';


describe('getGradesFromObject', () => {
	it('should return empty array for empty object', () => {
		const testData = {};
		const actual = getGradesFromObject(testData);
		const expected = [];

		expect(actual).toEqual(expected);
	});
	it('should return array when object has grades', () => {
        const testData = {
            student1: {
                grade: 100
            },
            student2: {
                grade: 55
            }
        };

        const actual = getGradesFromObject(testData);
        const expected = [100, 55];

        expect(actual).toEqual(expected);
	});
});
