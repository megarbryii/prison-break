import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return(
        <div className='home-wrapper'>
            <h1>Welcome to Prison Break!</h1>

            <p>This is an old fashioned text adventure game where you are trying to escape a county jail cell and 
                make a break for freedom.
            </p>

            <p>The instructions are simple... You just click on the button for the option that you want to perform
                (such as going a direction or picking up an item) and just keep going until you make it to the end
                or until something bad happens to you.
            </p>

            <p>Good luck!  And have fun escaping the prison!</p>

            <div className='nav-link-wrapper home-game'>
                <Link to='/game'>Go to the game here</Link>
            </div>

        </div>
    )
}