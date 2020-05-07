const Rooms = [
    {
        id: 0,
        name: 'Grass Menagerie',
        description: 'The room is covered in a variety of plants, vines, and other green flora, and seems to be emitting an aroma of freshly cut grass.  You see doors to the east and to the south.',
        options: [
            {
                id:0,
                text: 'Go east...',
                nextRoom: 1
            },
            {
                id: 1,
                text: 'Go south...',
                nextRoom: 3
            }
        ]
    },
    {
        id: 1,
        name: 'Pale Moonlight',
        description: 'The room has a variety of rocks in all shapes and sizes scattered across the floor, and seems to bathed under the light of the full moon.  You see doors to the west, to the south, and to the east.',
        options: [
            {
                id: 2,
                text: 'Go east...',
                nextRoom: 0
            },
            {
                id: 3,
                text: 'Go south...',
                nextRoom: 4
            },
            {
                id: 4,
                text: 'Go west...',
                nextRoom: 2
            }
        ]
    },
    {
        id: 2,
        name: 'White Room of Solitude',
        description: 'The room seems to be mostly empty except for a small white couch and has black curtains, but has no windows, and you seems to be able to get whiffs of funeray incense.  You see doors to the west and to the south.',
        options: [
            {
                id: 5,
                text: 'Go west...',
                nextRoom: 1
            },
            {
                id: 6,
                text: 'Go south...',
                nextRoom: 5
            }
        ]
    },
    {
        id: 3,
        name: 'Summer Palisade',
        description: 'The room seems to be decked out for a summer party, but there is no door and all the outdoor furniture is yellow.  You can smell a mixture of a pool, lemonade, and sweet tea.  You see doors to the north, to the east, and to the south.',
        options: [
            {
                id: 7,
                text: 'Go east...',
                nextRoom: 4
            },
            {
                id: 8,
                text: 'Go south...',
                nextRoom: 6
            },
            {
                id: 9,
                text: 'Go north...',
                nextRoom: 0
            }
        ]
    },
    {
        id: 4,
        name: 'Sugary Pink',
        description: 'The room seems to be nothing but solid, fluffy pink clouds that you can stand on, and emit a scent between bubble gum and cotton candy.  You see doors to the north, to the east, to the south, and to the west.',
        options: [
            {
                id: 10,
                text: 'Go north...',
                nextRoom: 1
            },
            {
                id: 11,
                text: 'Go east...',
                nextRoom: 5
            },
            {
                id: 12,
                text: 'Go south...',
                nextRoom: 7
            },
            {
                id: 13,
                text: 'Go west...',
                nextRoom: 3
            }
        ]
    },
    {
        id: 5,
        name: 'Purple Haze',
        description: 'The room is covered in what appears to be a haze swiriling around in different shades of purples and violets, and seems to give you a weird sense of happiness.  You can barely see doors to the north, to the west, and to the south.',
        options: [
            {
                id: 14,
                text: 'Go north...',
                nextRoom: 2
            },
            {
                id: 15,
                text: 'Go west...',
                nextRoom: 4
            },
            {
                id: 16,
                text: 'Go south...',
                nextRoom: 8
            }
        ]
    },
    {
        id: 6,
        name: 'Brunch Nook',
        description: 'The room looks like a small nook to have brunch in, with all the furniture, tablecloths, and napkins in orange.  You can smell bacon, eggs, pancakes, ham, and mimosas, and it seems to be making you hungry.  You see doors to the north and to the east.',
        options: [
            {
                id: 17,
                text: 'Go east...',
                nextRoom: 7
            },
            {
                id: 18,
                text: 'Go north...',
                nextRoom: 3
            }
        ]
    },
    {
        id: 7,
        name: 'Red Gardens',
        description: 'The rooms seems to be nothing but a large flower garden, but all the varieties of flowers seem to only have scarlet petals, and has an intoxicating aroma of carnations, roses, and tulips.  You see doors to the west, to the north, and to the east.',
        options: [
            {
                id: 19,
                text: 'Go east...',
                nextRoom: 8
            },
            {
                id: 20,
                text: 'Go north...',
                nextRoom: 4
            },
            {
                id: 21,
                text: 'Go west...',
                nextRoom: 6
            }
        ]
    },
    {
        id: 8,
        name: 'Eternal Darkness',
        description: 'The room seems to be completely covered in pitch black darkness, save for the the doors to the west, the north, and the east, which seem to be illuminated by hanging lights above the doors.',
        options: [
            {
                id: 22,
                text: 'Go east...',
                nextRoom: 9
            },
            {
                id: 23,
                text: 'Go north...',
                nextRoom: 5
            },
            {
                id: 24,
                text: 'Go west...',
                nextRoom: 7
            }
        ]
    },
    {
        id: 9,
        name: 'End of the Line',
        description: 'You hurredly rush out the last door, and you seem to be surrounded by swirling mists.  The next thing you know you start to feel dizzy and sleepy, and end up laying on the floor and falling unconscious.  You happen to wake up on your couch in your nice home and discovered it was all just a dream...',
        options: [
            {
                id: 25,
                text: 'You Won!!',
                nextRoom: -2
            }
        ]
    },
]

export default Rooms;