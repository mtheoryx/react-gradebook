import React from 'react';
import './Header.css';
import { titleCase } from '../../helpers/strings';

const Header = ({ text }) => (
    <div className="Header">
        <h2>{ titleCase(text) }</h2>
    </div>
);

Header.defaultProps = {
    text: 'Sample Text'
};

export default Header;
