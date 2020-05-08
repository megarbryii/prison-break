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