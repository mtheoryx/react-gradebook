import React from 'react';
import './DeleteButton.css';

const DeleteButton = props => {
    const { onDelete, itemId } = props;

    return (
        <button className="deleteButton" onClick={ () => onDelete(itemId) }>&times;</button>
    )
};

DeleteButton.propTypes = {
    onDelete: React.PropTypes.func.isRequired,
    itemId: React.PropTypes.string.isRequired
};

export default DeleteButton;


