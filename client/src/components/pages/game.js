import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import GameButton from '../game/gameButtons';
import Inventory from '../game/inventory';

import Rooms from '../test/Rooms/rooms';
import itemInventory from '../test/Inventory/inventory';

export default class Game extends Component{
    constructor() {
        super();

        this.state = {
            currentRoom: {},
            inventory: []
        }
    }

    gameStart = () => {
        this.showRoom(0);
        
    }

    showRoom = (room) => {
        this.setState({
            currentRoom: Rooms[room]
        })
    }

    componentWillMount = () => {
        this.gameStart();
        
    }

    shouldComponentUpdate = () => {
        const { options } = this.state.currentRoom;
        if(options.id === 19) {
            this.setState({
                inventory: [itemInventory[0]]
            })
        }

        if(options.id === 25 && this.state.inventory !== []) {
            this.setState({
                inventory: []
            })
        }
        return true;
    }

    render(){
        const { name, description, options } = this.state.currentRoom;

        const showInventory = this.state.inventory.map(inv =>{
                return (
                    <Inventory 
                        key={inv.id}
                        name={inv.itemName}
                    />
                )
        })

        const showButtons = options.map(option => {
            if(option.nextRoom === -1) {
                return (
                    <GameButton 
                        key={option.id}
                        className='btn-lose'
                        onClick={() => this.gameStart()}
                        text={option.text}
                    />
                )
            } else if(option.nextRoom === -2) {
                return (
                    <GameButton 
                        key={option.id}
                        className='btn-win'
                        onClick={() => this.gameStart()}
                        text={option.text}
                    />
                )
            } else {
                return(
                    <GameButton 
                        key={option.id}
                        className='btn'
                        onClick={() => this.showRoom(option.nextRoom)}
                        text={option.text}
                    />

                )
            }   
        })
            
        

        return(
            <div className='game-wrapper'>
                <div className='left-side'>
                    <GameOutput 
                        name={name}
                        text={description}
                    />
        

                    <div className='btn-output'>
                        {showButtons}
                    </div>
      
                </div>

                <div className='right-side'>
                    

                    <div className='game-inventory'>
                        <h2>Inventory</h2>
                    </div>

                    <div className='inventory-output'>
                        <ul>
                            {showInventory}
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}