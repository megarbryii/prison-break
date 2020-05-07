import React from 'react';

const GameButton = (props) => {
    return(
        <button
                key={props.id}
                className={`${props.className}`}
                onClick={props.onClick}
            >
            {props.text}
        </button>
    )
}

export default GameButton;    
        
    