const createStore = reducer => {
    let state;
    let listeners = [];

    const getState = () => state; //always return current state

    const dispatch = action => { // The Magic :D
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = listener =>  {
        listeners.push(listener);

        return () => listeners = listeners.filter(l => l !== listener); //unsubscribe functionality
    };

    dispatch({}); //Need to fire for initial state trigger

    return { getState, dispatch, subscribe };
};

export default createStore;
