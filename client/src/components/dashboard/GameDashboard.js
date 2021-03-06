import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRooms } from '../../actions/game';

import GameDashActions from './GameDashActions';

const GameDashboard = ({ game: { rooms }, getRooms, auth: { isAuthenticated } }) => {
    useEffect(() => {
        getRooms();
    }, [getRooms]);


    return (
        <Fragment>
            <h1>Rooms Dashboard</h1>
            { rooms !== null && isAuthenticated ? (
                <Fragment>
                    <GameDashActions />
                </Fragment>
            ) : (
                <Fragment>
                   <p>You need to create a room</p> 
                   <Link to='/room-edit' className='btn'>
                       Create Room
                   </Link>
                </Fragment>
            )}
        </Fragment>
    )
}

GameDashboard.propTypes = {
    game: PropTypes.object.isRequired,
    getRooms: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    game: state.game,
    auth: state.auth
})

export default connect(mapStateToProps, { getRooms })(GameDashboard);
