import React from 'react';
import './AverageScore.css';
import { avg } from '../../helpers/stats';
import { getGradesFromObject } from '../../helpers/grades';

const AverageScore = ({ students }) => {
    return (
        <div className="AverageScore">
            <span>Avg - { avg(getGradesFromObject(students)) } %</span>
        </div>
    )
};

export default AverageScore;
