import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const DeleteButton = ({ onDelete, itemId }) => {
    const onHandleClick = () => onDelete(itemId);

    return (
        <button
            className={css(styles.deleteButton)}
            onClick={ onHandleClick }>
        </button>
)};

const styles = StyleSheet.create({
    deleteButton: {
        height: '40px',
        width: '40px',
        border: '1px solid #ccc',
        backgroundColor: '#fafafa',
        position: 'relative',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#ececec',
            borderColor: '#7b7b7b'
        },
        ':active': {
            outline: 'none'
        },
        ':focus': {
            outline: 'none'
        },
        ':after': {
            content: '"\u00d7"',
            fontSize: '40px',
            color: '#505050',
            position: 'absolute',
            top: '-8px',
            left: '7px'
        }
    }
});

DeleteButton.propTypes = {
    onDelete: React.PropTypes.func.isRequired,
    itemId: React.PropTypes.string.isRequired
};

export default DeleteButton;


