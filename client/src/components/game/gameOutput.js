import React from 'react';

const GameOutput = ({ name, text }) => {
        
    return (
        <div className='output-wrapper'>

            <div className='output-name'>
                <h2>{name}</h2>
            </div>

            <div className='output-text'>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default GameOutput;