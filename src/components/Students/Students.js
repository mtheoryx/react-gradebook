import React, { Component } from 'react';
import './Students.css';
import Student from '../Student/Student';

//Handle delete student

class Students extends Component {
    render() {
        const { students } = this.props;

        return (
            <ul className="Students">
                {
                    ( students  ) ?
                        Object
                            .keys( students )
                            .map( key =>
                                <Student
                                    key={ key }
                                    studentId={ key }
                                    student={ students[key] }
                                    deleteStudent={ this.props.deleteStudent }
                                />
                            )
                        : <li>No students.</li>
                }
            </ul>
        )

    }

}


Students.propTypes = {
    students: React.PropTypes.object
};

export default Students;
