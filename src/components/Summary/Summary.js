import React from 'react';
import './Summary.css';
import MinimumScore from '../MinimumScore/MinimumScore';
import AverageScore from '../AverageScore/AverageScore';
import MaximumScore from '../MaximumScore/MaximumScore';

const Summary = ({ students }) => {
    return (
        <div className="Summary">
            <span>Metrics</span>

            <MinimumScore students={ students } />
            <AverageScore students={ students } />
            <MaximumScore students={ students } />
        </div>
    )
};

Summary.propTypes = {
    students: React.PropTypes.object.isRequired
};

export default Summary;
