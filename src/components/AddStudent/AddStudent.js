import React, { Component } from 'react';
import './AddStudent.css';

class AddStudent  extends Component {
    addStudent( event ) {
        event.preventDefault();

        const student = {
            name: this.name.value,
            grade: +this.grade.value //Coerce to a number
        };
        

        this.props.addStudent(student);
        this.studentForm.reset();
        this.name.focus();
    }

    render() {
        return (
            <form ref={(input) => this.studentForm = input}
                  className="AddStudent"
                  onSubmit={ (e) => this.addStudent(e) }>
                <div className="studentName">
                    <input ref={(input) => this.name = input} id="name" type="text" placeholder="New Student Name" />
                </div>
                <div className="studentGrade">
                    <input ref={(input) => this.grade = input} id="grade" type="number" min="1" max="100" step="0.01" placeholder="Grade" />
                </div>
                <button type="submit">Add</button>
            </form>
        )
    }
}

AddStudent.propTypes = {
    addStudent: React.PropTypes.func.isRequired
};

export default AddStudent;
