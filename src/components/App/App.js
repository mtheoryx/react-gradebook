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

        this.deleteStudent = this.deleteStudent.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);

        this.state = {
            students: sampleData
        }
    }

    deleteStudent( studentId ) {
        const students = {...this.state.students};

        delete students[studentId];

        this.setState({students});
    }

    addStudent( student ) {
        //Copy state
        const students = {...this.state.students};

        //Create new unique id
        const timestamp = Date.now();
        students[`student=${ timestamp }`] = student;

        //Set state
        this.setState({ students });
    }
    
    updateStudent( key, updatedStudent ) {
        const students = {...this.state.students};

        students[key] = updatedStudent;

        this.setState({ students });
    }

    render() {
        return (
            <div className="App">
                <Header text="React Gradebook" />
                <Intro text="Exam Summary" />
                <div className="App-data">
                    <Students students={this.state.students}
                              deleteStudent={ this.deleteStudent }
                              addStudent={ this.addStudent }
                              updateStudent={ this.updateStudent }
                    />
                    <Summary students={this.state.students}/>
                </div>
            </div>
        );
    }
}

export default App;
