import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_ROOM,
    GET_ROOMS,
    UPDATE_ROOM,
    DELETE_ROOM,
    ROOM_ERROR
} from './types';

//Get a single room
export const getRoom = (roomId) => async dispatch => {
    try {
        const res = await axios.get(`/api/room/${roomId}`);

        dispatch({
            type: GET_ROOM,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ROOM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Get all rooms
export const getRooms = () => async dispatch => {
    try {
        const res = await axios.get('/api/room/');

        dispatch({
            type: GET_ROOMS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Create or update room
export const createRoom = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/room', formData, config);

        dispatch({
            type: GET_ROOM,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Room Updated' : 'Room Created', 'success'));

        if(!edit) {
            //todo: Create rooms page
            //history.push('/');
        }
    } catch (err) {
        const errors = err.response.data.error;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: ROOM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Add choices to a room
export const addChoice = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.put('/api/profile/choice', formData, config);

        dispatch({
            type: UPDATE_ROOM,
            payload: res.data
        });

        dispatch(setAlert('Choice Added', 'success'));

            history.push('/');
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: ROOM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

///Delete room
export const deleteRoom = (id) => async dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            await axios.delete(`/api/room/${id}`);
    
            dispatch({ type: DELETE_ROOM });
    
            dispatch(setAlert('Room removed'));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        } 
    }
}

//Delete choice from a room
export const deleteChoice = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/room/choice/${id}`);

        dispatch({
            type: UPDATE_ROOM,
            payload: res.data
        });

        dispatch(setAlert('Choice removed', 'success'));
    } catch (err) {
        dispatch({
            type: ROOM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}