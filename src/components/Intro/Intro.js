import React from 'react';
import './Intro.css';

const Intro = props => {
    return(
        <p className="Intro">
            <span>
                {props.text}
            </span>

        </p>
    )
};

Intro.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default Intro;
