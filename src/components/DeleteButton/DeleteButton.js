import React from 'react';
import './DeleteButton.css';

const DeleteButton = ({ onDelete, itemId }) => (
    <button
        className="DeleteButton"
        onClick={ () => onDelete(itemId) }>
        &nbsp;
    </button>
);

DeleteButton.propTypes = {
    onDelete: React.PropTypes.func.isRequired,
    itemId: React.PropTypes.string.isRequired
};

export default DeleteButton;


