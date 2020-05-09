import {
    GET_ROOM,
    GET_ROOMS,
    ROOM_ERROR,
    UPDATE_ROOM,
    DELETE_ROOM
} from '../actions/types';

const initialState = {
    currentRoom: Room[-3],
    room: {},
    rooms: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ROOM:
            return {
                ...state,
                room: payload,
                currentRoom: Room[payload.room_id],
                loading: false
            }
        case GET_ROOMS:
            return {
                ...state,
                rooms: payload,
                loading: false
            }
        case UPDATE_ROOM:
            return {
                ...state,
                room: payload,
                loading: false
            }
        case DELETE_ROOM:
            return {
                ...state,
                room: {},
                loading: false
            }
        case ROOM_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            state;
    }
}