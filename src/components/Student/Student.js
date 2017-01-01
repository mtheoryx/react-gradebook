import React from 'react';
import './Student.css';
import DeleteButton from '../DeleteButton/DeleteButton';
class Student extends React.Component {

    render() {
        const { student, deleteStudent, studentId } = this.props;

        return (
            <li className="Student">
                { student.name } - { student.grade }
                <DeleteButton
                    onDelete={ deleteStudent }
                    itemId={ studentId } />
            </li>
        )
    }
}

Student.propTypes = {
    student: React.PropTypes.object.isRequired,
    deleteStudent: React.PropTypes.func.isRequired,
    studentId: React.PropTypes.string.isRequired
};

export default Student;
