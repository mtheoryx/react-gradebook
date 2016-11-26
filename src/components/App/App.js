import React, { Component } from 'react';
import './App.css';
import sampleData from '../../data/demo.js';
import Header from '../Header/Header';

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
                <Header text="React Gradebook" />

                <p className="Intro">
                    Grades
                </p>
                <ul className="Students">
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
