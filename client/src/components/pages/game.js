import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRoom } from '../../actions/game';

//Game components
import GameButton from '../game/GameButtons';
import GameOutput from '../game/GameOutput';

const Game = ({ game: { name, desc, choice: { choiceText, nextRoom } }, match, getRoom }) => {
    useEffect(() => {
        getRoom(match.params.id);
    }, [getRoom, match.params.id]);

    return (
        <div className='game-wrapper'>
            <div className="left-side">
                <GameOutput 
                    name={name}
                    text={desc}
                />
            </div>

            <div className="right-side">

            </div>
        </div>
    )
}

Game.propType = {
    getRoom: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired
}

const mapStateToProps = state = {
    game: state.game
}

export default connect(mapStateToProps, { getRoom })(Game);
