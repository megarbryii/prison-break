const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create room schema
const RoomSchema = new Schema({
    room_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    choice: [
        {
            choiceText: {
                type: String,
                required: true
            },
            nextRoom: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = Room = mongoose.model('room', RoomSchema);