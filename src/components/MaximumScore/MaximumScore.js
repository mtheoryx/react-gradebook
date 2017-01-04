import React from 'react';
import MaximumScore from './MaximumScore.css';
import { max } from '../../helpers/stats';
import { getGradesFromObject } from '../../helpers/grades';

const AverageScore = ({ students }) => {
    return (
        <div className="MaximumScore">
            <span>Max - { max(getGradesFromObject(students)) } %</span>
        </div>
    )
};

export default AverageScore;
