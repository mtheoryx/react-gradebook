import React from 'react';
import './MaximumScore.css';
import { max } from '../../helpers/stats';
import { getGradesFromObject } from '../../helpers/grades';

const MaximumScore = ({ students }) => (
    <div className="MaximumScore">
        <span>Max - { max(getGradesFromObject(students)) } %</span>
    </div>
);

export default MaximumScore;
