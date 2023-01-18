import React from 'react';

function Modal(props) {
    console.log(props);
    return (
        <div className="modal">
            <div>
                <h1>perso</h1>
                <p>{props.value}</p>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;