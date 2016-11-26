import React, { Component } from 'react';
import './App.css';
import sampleData from '../../data/demo.js';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Students from '../Students/Students';
import { min, max } from '../../helpers/stats';

class App extends Component {

    constructor() {
        super();

        this.renderMin = this.renderMin.bind(this);
        this.renderMax = this.renderMax.bind(this);
        this.renderAvg = this.renderAvg.bind(this);

        this.state = {
            students: sampleData
        }
    }

    renderMin() {
        return min(this.state.students);
    }

    renderMax() {
        return max(this.state.students);
    }

    renderAvg() {
        const data = this.state.students;
        return Object
                    .keys(data)
                    .map(key => data[key].grade)
                    .reduce((m,k) => {
                        return m + k
                    }, 0) / Object.keys(data).length;
    }

    render() {
        return (
            <div className="App">
                <Header text="React Gradebook" />
                <Intro text="Exam Summary" />
                <div className="App-data">
                    <Students students={this.state.students}/>
                    <div className="Summary">
                        <span>Metrics</span>
                        <div className="Summary-min">
                            <span>Min - {this.renderMin()}</span>

                        </div>
                        <div className="Summary-average">
                            <span>Avg - {this.renderAvg()}</span>
                        </div>
                        <div className="Summary-max">
                            <span>Max - {this.renderMax()}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
