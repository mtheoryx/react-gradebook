import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import createStore from './store/store';
import studentsReducer from './store/student-reducer';

const store = createStore(studentsReducer);

const render = () => {
    ReactDOM.render(
        <App
            students={store.getState()}
        />,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();

