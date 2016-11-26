import React, { Component } from 'react';

import './App.css';

import sampleData from '../../data/demo.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
            students: sampleData
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>React Gradebook</h2>
                </div>
                <p className="App-intro">
                    Grades
                </p>
                <ul className="students">
                    {
                        Object
                            .keys(this.state.students)
                            .map(key => <li key={key}>{this.state.students[key].name} - {this.state.students[key].grade}</li>)

                    }
                </ul>

            </div>
        );
    }
}

export default App;
