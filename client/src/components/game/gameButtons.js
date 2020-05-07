import React from 'react';

const GameButton = ({ id, className, onClick, text }) => {
    return(
        <button
                key={id}
                className={`${className}`}
                onClick={onClick}
            >
            {text}
        </button>
    )
}

export default GameButton;    
        
    