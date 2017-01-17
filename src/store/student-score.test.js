import { getInitialState } from './student-store';
import demoData from '../data/demo';

test('It gets an initial array of students', () => {
    const expected = Object.keys(demoData).length;
    const actual = Object.keys(getInitialState().students).length;

    expect(expected).toEqual(actual);
});
