import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createRoom, getRoom } from '../../actions/game';

const initialState = {
    room_id: '',
    name: '',
    desc: ''
}

const CreateRoom = ({ createRoom, getRoom, game: { room, loading }}) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if(!room) getRoom();
        if(!loading && room) {
            const roomData = {...initialState};
            for(const key in room) {
                if(key in roomData) roomData[key] = room[key];
            }
        }
    }, [loading, getRoom, room]);

    const {
        room_id,
        name,
        desc
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createRoom(formData, room ? true : false);
    }

    return (
        <Fragment>
            <h1>Create or Edit Room</h1>

            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder='Room ID'
                        name="room_id"
                        value={room_id}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder='Room Name'
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <textarea 
                        placeholder='Room description'
                        name="desc" 
                        value={desc}
                        onChange={onChange}
                    />
                </div>

                <input type="submit" className='btn'/>
                <Link to='/game-dashboard' className='btn'>
                    Go Back
                </Link>
            </form>
        </Fragment>
    )
}

CreateRoom.propTypes = {
    createRoom: PropTypes.func.isRequired,
    getRoom: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps, { createRoom, getRoom })(CreateRoom);
