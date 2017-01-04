import React from 'react';
import './Summary.css';
import { max } from '../../helpers/stats';
import { getGradesFromObject } from '../../helpers/grades';
import MinimumScore from '../MinimumScore/MinimumScore';
import AverageScore from '../AverageScore/AverageScore';

//@TODO: Split out into visualization
const Summary = ({ students }) => {
    return (
        <div className="Summary">
            <span>Metrics</span>

            <MinimumScore students={ students } />
            <AverageScore students={ students } />
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
