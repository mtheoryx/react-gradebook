import deepFreeze from 'deep-freeze';

// Subject Under Test
import studentsReducer from './student-reducer';

test('Should update a student name', () => {
    const stateBefore = [
        {
            id: 1,
            name: 'Billy Bob',
            grade: 50
        },
        {
            id: 2,
            name: 'Will Smith',
            grade: 50
        }
    ];
    const action = {
        type: 'UPDATE_STUDENT',
        id: 1,
        name: 'Billy Joel',
        grade: 50
    };

    const stateAfter = [
        {
            id: 1,
            name: 'Billy Joel',
            grade: 50
        },
        {
            id: 2,
            name: 'Will Smith',
            grade: 50
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        studentsReducer(stateBefore, action)
    ).toEqual(stateAfter);
});
test('Should update a student grade', () => {
    const stateBefore = [
        {
            id: 1,
            name: 'Billy Bob',
            grade: 50
        },
        {
            id: 2,
            name: 'Will Smith',
            grade: 50
        }
    ];
    const action = {
        type: 'UPDATE_STUDENT',
        id: 2,
        name: 'Will Smith',
        grade: 100
    };

    const stateAfter = [
        {
            id: 1,
            name: 'Billy Bob',
            grade: 50
        },
        {
            id: 2,
            name: 'Will Smith',
            grade: 100
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        studentsReducer(stateBefore, action)
    ).toEqual(stateAfter);
});
test('Should add a student', () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_STUDENT',
        id: 0,
        name: 'Joe Biden',
        grade: 100
    };
    const stateAfter = [
        {
            id: 0,
            name: 'Joe Biden',
            grade: 100
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        studentsReducer(stateBefore, action)
    ).toEqual(stateAfter);
});

test('Should delete a student', () => {
    const stateBefore = [
        {
            id: 0,
            name: 'Joe Biden',
            grade: 100
        },
        {
            id: 1,
            name: 'Donald Trump',
            grade: 30
        }
    ];
    const action = {
        type: 'REMOVE_STUDENT',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            name: 'Joe Biden',
            grade: 100
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        studentsReducer(stateBefore, action)
    ).toEqual(stateAfter);
});

