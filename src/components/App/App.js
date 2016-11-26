import React, { Component } from 'react';
import './App.css';
import sampleData from '../../data/demo.js';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Students from '../Students/Students';

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
                <Students students={this.state.students}/>

            </div>
        );
    }
}

export default App;
