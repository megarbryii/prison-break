const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Room = require('../../models/Room');

const auth = require('../../middleware/auth');

//@route GET '/api/room/:id
//@desc Get current users room
//@access Public
router.get('/:id', auth, async (req, res) => {
    try {
      const room = await Room.findOne({ user: req.room.id }).populate('room');
      
      if(!room) {
          return res.status(400).json({ msg: 'Room does not exist!' });
      }

      res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//@route POST /api/room/
//@desc Create or update room
//@access Private
router.post('/', [auth, [
    check('room_id', 'An id number must be provided').not().isEmpty(),
    check('name', 'A room name must be provided').not().isEmpty(),
    check('desc', 'A room description must be provided').not().isEmpty(),
    check('choice', 'Choices must be filled in').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        room_id,
        name,
        desc,
        choice
    } = req.body;

    //Build new room object
    const roomFields = {};

    if(room_id) roomFields.room_id = room_id;
    if(name) roomFields.name = name;
    if(desc) roomFields.desc = desc;
    if(choice) roomFields.choice = choice;


    try {
       let room = await Room.findOne({ user: req.room.id }); 

       if(room) {
           //Update
           room = await Room.findOneAndUpdate({ room: req.room.id },
            { $set: roomFields},
            { new: true} );

            return res.json(room);
       }

       //Create
       room = new Room(roomFields);

       await room.save();
       res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//@route GET /api/room
//@desc Get all rooms
//@access Public
router.get('/', async (req, res) => {
    try {
        const room = await Room.find().populate('room');
        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route DELETE /api/room
//@desc Delete a room
//@access Private
router.delete('/', auth, async (req, res) => {
    try {
        //Remove room
        await Room.findOneAndRemove({ user: req.room.id});


        res.json({ msg: 'Room deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route PUT /api/room/choice
//@desc Add room choices
//@access Private
router.put('/choice', [auth, [
    check('choiceText', 'Button text for player choice required').not().isEmpty(),
    check('nextRoom', 'You need to put in which room the player needs to go next').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        choiceText,
        nextRoom
    } = req.body;

    const newChoice = {
        choiceText,
        nextRoom
    }

    try {
       const room = await Room.findOne({ user: req.room.id });
        
        room.choice.push(newChoice);

        await room.save();

        res.json(room);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');  
    }
})

//@route DELETE api/room/choice/:choice_id
//@desc Delete room choice
//@access Private
router.delete('/choice/:choice_id', auth, async (req, res) => {
    try {
        const room = await Room.findOne({ user: req.room.id });

        const removeIndex = room.choice.map(item => item.id).indexOf(req.params.choice_id);

        room.choice.splice(removeIndex, 1);

        await room.save();

        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;