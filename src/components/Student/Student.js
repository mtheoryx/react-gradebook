import React from 'react';
import './Student.css';

const Student = ({ student }) => (
    <div className="Student">
        { student.name } - { student.grade }
    </div>
);

Student.propTypes = {
    student: React.PropTypes.object.isRequired
};

export default Student;
