import React, { useState } from 'react';

//Game components
import gameButtons from '../game/gameButtons';
import gameOutput from '../game/gameOutput';

export const Game = () => {
    const [ currentRoom, setCurrentRoom ] = useState({});

    return (
        <div className='game-wrapper'>
            <div className="left-side">

            </div>

            <div className="right-side">

            </div>
        </div>
    )
}
