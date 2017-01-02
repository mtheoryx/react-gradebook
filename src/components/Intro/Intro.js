import React from 'react';
import './Intro.css';

const Intro = ({ text }) => (
    <p className="Intro">
        <span>{text}</span>
    </p>
);

Intro.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default Intro;
