import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout}) => {
    const authLinks = (
        <div className='nav-wrapper'>
            <div className='nav-link-wrapper'>
                <NavLink to='/game-dashboard' activeClassName='page-active'>Dashboard</NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to='/room-edit' activeClassName='page-active'>Room Editor</NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to='/game' activeClassName='page-active'>Game</NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <a onClick={logout} href="#!">Logout</a>
            </div>
        </div>
    );

    const guestLinks = (
        <div className='nav-wrapper'>
            <div className="nav-link-wrapper">
                <NavLink to='/' activeClassName='page-active'>Home</NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to='/game' activeClassName='page-active'>Game</NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to='/about' activeClassName='page-active'>About Us</NavLink>
            </div>
        </div>
    );

    return (
        <Fragment>
            {!loading && (
                <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
            )}
        </Fragment>
            
        
    )
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
