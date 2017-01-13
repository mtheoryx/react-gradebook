import React from 'react';
import './DeleteButton.css';

const DeleteButton = ({ onDelete, itemId }) => {
    const onHandleClick = () => onDelete(itemId);

    return (
        <button
            className="DeleteButton"
            onClick={ onHandleClick }>
            &nbsp;
        </button>
)};

DeleteButton.propTypes = {
    onDelete: React.PropTypes.func.isRequired,
    itemId: React.PropTypes.string.isRequired
};

export default DeleteButton;


