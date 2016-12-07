import React from 'react';
import './Header.css';
import { titleCase } from '../../helpers/strings';

const Header = props => {
    const text = props.text ? titleCase(props.text) : '';
    return (
        <div className="Header">
            <h2>{text}</h2>
        </div>
    )
};

export default Header;
