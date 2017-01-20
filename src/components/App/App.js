import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Students from '../Students/Students';
import Summary from '../Summary/Summary';

const App = ({ students }) => (
    <div className="App">
        <Header text="React Gradebook" />
        <Intro text="Exam Summary" />
        <div className="App-data">
            <Students students={ students } />
            <Summary students={students}/>
        </div>
        <br/>
        <div>
            <span>Current State:</span>
            <pre>{JSON.stringify(students, null, 4)}</pre>
        </div>
    </div>
);

export default App;

//                     {/*<Students students={this.state.students}*/}
//                               {/*deleteStudent={ this.deleteStudent }*/}
//                               {/*addStudent={ this.addStudent }*/}
//                               {/*updateStudent={ this.updateStudent }*/}
//                     {/*/>*/}

