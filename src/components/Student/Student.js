import React from 'react';
import './Student.css';

class Student extends React.Component {
    render() {
        const { name, grade } = this.props;

        return (
            <li className="Student">{ name } - { grade }</li>
        )
    }
}

Student.propTypes = {
    name: React.PropTypes.string.isRequired,
    grade: React.PropTypes.number.isRequired
};

export default Student;
