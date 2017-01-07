import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
    handleChange(e, key) {
        const student = this.props.student;
        
        const value = ( e.target.name === 'grade' )
                ? +e.target.value
                : e.target.value;

        const updatedStudent = {
            ...student,
            [e.target.name]: value
        };

        this.props.updateStudent(key, updatedStudent);
    }

    render() {
        const { student, studentId } = this.props;

        return (
            <div className="Student" >
                <input
                    className="editNameInput"
                    type="text"
                    name="name"
                    value={ student.name }
                    onChange={ (e) => this.handleChange(e, studentId) } />

                <input
                    className="editGradeInput"
                    type="number"
                    name="grade"
                    min="1"
                    max="100"
                    step="0.01"
                    value={ student.grade }
                    onChange={ (e) => this.handleChange(e, studentId) } />
            </div>
        )
    }
}

Student.propTypes = {
    student: React.PropTypes.object.isRequired
};

export default Student;
