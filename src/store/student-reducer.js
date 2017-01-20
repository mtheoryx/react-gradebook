const studentsReducer = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_STUDENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    grade: action.grade
                }
            ];
        case 'REMOVE_STUDENT':
            const studentId = action.id;
            return state.filter(s => s.id !== studentId);
        case 'UPDATE_STUDENT':
            const studentUpdate = {
                id: action.id,
                name: action.name,
                grade: action.grade
            };

            const objectPosition = state.map(item => item.id).indexOf(action.id);

            return [
                ...state.slice(0, objectPosition)
                .concat(studentUpdate),
                ...state.slice(objectPosition + 1)
            ];
        default:
            return state;
    }
};
export default studentsReducer;
