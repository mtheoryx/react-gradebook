import React from 'react';
import './Summary.css';
import { max, avg } from '../../helpers/stats';
import { getGradesFromObject } from '../../helpers/grades';
import MinimumScore from '../MinimumScore/MinimumScore';

//@TODO: Split out into visualization
const Summary = ({ students }) => {
    return (
        <div className="Summary">
            <span>Metrics</span>

            <MinimumScore students={ students } />

            <div className="Summary-average">
                <span>Avg - { avg(getGradesFromObject(students)) } %</span>
            </div>
            <div className="Summary-max">
                <span>Max - { max(getGradesFromObject(students)) } %</span>
            </div>
        </div>
    )
};

Summary.propTypes = {
    students: React.PropTypes.object.isRequired
};

export default Summary;
