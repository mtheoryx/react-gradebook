import deepFreeze from 'deep-freeze';

const students = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_STUDENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    grade: action.grade
                }
            ]
    }
};

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
        students(stateBefore, action)
    ).toEqual(stateAfter);
});

