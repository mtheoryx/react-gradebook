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



export default Student;
