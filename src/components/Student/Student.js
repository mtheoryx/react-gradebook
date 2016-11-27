import React from 'react';
import './Student.css';

class Student extends React.Component {

    render() {
        const { student, deleteStudent, studentId } = this.props;

        return (
            <li className="Student">
                <button className="deleteStudent" onClick={ () => deleteStudent(studentId) }>&times;</button>
                { student.name } - { student.grade }
            </li>
        )
    }
}

Student.propTypes = {
    student: React.PropTypes.object.isRequired
};

export default Student;
