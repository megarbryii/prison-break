import React from 'react';

const GameOutput = (props) => {
        
    return (
        <div className='output-wrapper'>

            <div className='output-name'>
                <h2>{props.name}</h2>
            </div>

            <div className='output-text'>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default GameOutput;