import React from 'react';
import './Summary.css';
import { min, max, avg } from '../../helpers/stats';

const getGrades = students =>
    (Object.keys(students).length === 0)
        ? []
        : Object
            .keys(students)
            .map(key => students[key].grade);

const gradesArray = students => getGrades(students);

//@TODO: Split out into visualization
const Summary = ({ students }) => {
    return (
        <div className="Summary">
            <span>Metrics</span>

            <div className="Summary-min">
                <span>Min - { min(gradesArray(students)) } %</span>
            </div>
            <div className="Summary-average">
                <span>Avg - { avg(gradesArray(students)) } %</span>
            </div>
            <div className="Summary-max">
                <span>Max - { max(gradesArray(students)) } %</span>
            </div>
        </div>
    )
};

Summary.propTypes = {
    students: React.PropTypes.object.isRequired
};

export default Summary;
