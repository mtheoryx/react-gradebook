import React, { Component } from 'react';
import './App.css';
import sampleData from '../../data/demo.js';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Student from '../Student/Student';

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
                <Intro text="Exam Summary" />
                <ul className="Students">
                    {
                        Object
                            .keys(this.state.students)
                            .map(key =>
                                <Student key={key}
                                         name={this.state.students[key].name}
                                         grade={this.state.students[key].grade} />
                            )
                    }
                </ul>

            </div>
        );
    }
}

export default App;
