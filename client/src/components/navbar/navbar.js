import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return(
            <div className='nav-wrapper'>
                
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/' activeClassName='page-active' >Home</NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink to='/game' activeClassName='page-active' >Game</NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink to='/about' activeClassName='page-active' >About Us</NavLink>
                </div>

            </div>
        )
    }
}