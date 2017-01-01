import React from 'react';
import './DeleteButton.css';

const DeleteButton = props => {
    const { onDelete, itemId } = props;

    return (
        <button className="DeleteButton" onClick={ () => onDelete(itemId) }></button>
    )
};

DeleteButton.propTypes = {
    onDelete: React.PropTypes.func.isRequired,
    itemId: React.PropTypes.string.isRequired
};

export default DeleteButton;


