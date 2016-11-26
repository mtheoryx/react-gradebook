import React from 'react';

const Header = props => {
    return (
        <div className="Header">
            <h2>{props.text}</h2>
        </div>
    )
};

Header.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default Header;
