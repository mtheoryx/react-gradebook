import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Students from '../Students/Students';
import Summary from '../Summary/Summary';
import { getInitialState } from '../../store/store';

class App extends Component {

    constructor() {
        super();

        this.deleteStudent = this.deleteStudent.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.state = getInitialState();
    }

    deleteStudent( studentId ) {
        const students = {...this.state.students};

        delete students[studentId];

        this.setState({students});
    }

    addStudent( student ) {
        const students = {...this.state.students};
        const timestamp = Date.now();

        students[`student=${ timestamp }`] = student;

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
                <br/>
                <div>
                    <span>Current State:</span>
                    <pre>{JSON.stringify(this.state.students, null, 4)}</pre></div>
            </div>
        );
    }
}

export default App;
