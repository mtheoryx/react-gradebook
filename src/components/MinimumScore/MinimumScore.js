import React from 'react';
import './MinimumScore.css';
import { min } from '../../helpers/stats';
import { getGradesFromObject } from '../../helpers/grades';

const MinimumScore = ({ students }) => {
    return (
        <div className="MinimumScore">
            <span>Min - { min(getGradesFromObject(students)) } %</span>
        </div>
    )
};

export default MinimumScore;
