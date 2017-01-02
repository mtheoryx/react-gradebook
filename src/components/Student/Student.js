import React from 'react';
import './Student.css';
class Student extends React.Component {

    render() {
        const { student } = this.props;

        return (
            <div className="Student">
                { student.name } - { student.grade }
            </div>
        )
    }
}

Student.propTypes = {
    student: React.PropTypes.object.isRequired
};

export default Student;
