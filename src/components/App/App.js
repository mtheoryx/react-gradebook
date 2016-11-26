import React, { Component } from 'react';
import './App.css';
import sampleData from '../../data/demo.js';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Students from '../Students/Students';
import Summary from '../Summary/Summary';

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
                <div className="App-data">
                    <Students students={this.state.students}/>
                    <Summary students={this.state.students}/>
                </div>
            </div>
        );
    }
}

export default App;
