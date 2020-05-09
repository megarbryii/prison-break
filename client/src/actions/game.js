import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_ROOM,
    UPDATE_ROOM,
    DELETE_ROOM,
    ROOM_ERROR
} from './types';

//Get room
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