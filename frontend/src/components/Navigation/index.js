import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import NavBar from '../NavBar';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <nav className='nav'>
        <NavBar/>
        <div className='profile-button'>
          <ProfileButton user={sessionUser} />
        </div>
      </nav>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">Sign Up</NavLink>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div className='nav'>
        {/* <div className='home-div'>
          <NavLink exact to="/">Home</NavLink>
        </div> */}
        
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;