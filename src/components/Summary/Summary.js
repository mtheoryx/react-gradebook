import React from 'react';
import './Summary.css';
import { min, max, avg } from '../../helpers/stats';

//Decorate fail, pass state

const Summary = props => {
    return (
        <div className="Summary">
            <span>Metrics</span>

            <div className="Summary-min">
                <span>Min - {min(props.students)}</span>
            </div>
            <div className="Summary-average">
                <span>Avg - {avg(props.students)}</span>
            </div>
            <div className="Summary-max">
                <span>Max - {max(props.students)}</span>
            </div>
        </div>
    )
};

Summary.propTypes = {
    students: React.PropTypes.object.isRequired
};

export default Summary;
