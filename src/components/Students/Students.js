import React from 'react';
import './Students.css';

import Student from '../Student/Student';

const Students = props => {
    return (
        <ul className="Students">
            {
                ( props.students  ) ?
                    Object
                        .keys(props.students)
                        .map(key =>
                            <Student
                                key={key}
                                name={props.students[key].name}
                                grade={props.students[key].grade} />
                        )
                    : <li>No students.</li>
            }
        </ul>
    )
};

Students.propTypes = {
    students: React.PropTypes.object
};

export default Students;
