import React from 'react';
import { Link } from 'react-router-dom';

export default function(){
    return(
        <div className='no-match-wrapper'>
            <h1>Out of all the infinite possibilites, that page doesn't exist in this universe!</h1>

            <div className='nav-link-wrapper match-error'>
                <Link to='/'>Home</Link>
            </div>

        </div>

    );
}