import React from 'react';
import './Students.css';
import Student from '../Student/Student';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddStudent from '../AddStudent/AddStudent';

const Students = ({ students, deleteStudent, addStudent, updateStudent }) => (
    <div className="Students">
        <AddStudent addStudent={ addStudent }/>
        <br/>
        {
            ( students )
                ? Object
                    .keys( students )
                    .map( key =>
                    <div key={ key } className="student-entry">
                        <Student
                            studentId={ key }
                            student={ students[key] }
                            updateStudent={ updateStudent }
                        />
                        <DeleteButton
                            onDelete={ deleteStudent }
                            itemId={ key }/>
                    </div>
                    )
                : <div>No students.</div>
        }
    </div>
);

Students.propTypes = {
    students: React.PropTypes.object
};

export default Students;
