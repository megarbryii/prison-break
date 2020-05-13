import React from 'react'
import { Link } from 'react-router-dom';

export const GameDashActions = () => {
    return (
        <div>
            <Link to='/room-edit' className='btn'>
                Create or Edit room
            </Link>
        </div>
    )
}
