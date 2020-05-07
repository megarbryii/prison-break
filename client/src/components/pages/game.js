import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

//Game components
import gameButtons from '../game/gameButtons';
import gameOutput from '../game/gameOutput';

const Game = () => {
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

Game.propType = {

}

export default connect()(Game);
