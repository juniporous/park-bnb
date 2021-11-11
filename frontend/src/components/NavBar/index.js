import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar-div'>
      <div>
        <NavLink activeClassName='navlink-text' to='/mySpots'>My Spots</NavLink>
      </div>
      <div className='navlink-text'>
        <NavLink  to='/create'>Create Spot</NavLink>
      </div>
      <div className='navlink-text'>
      <NavLink  to='/spots'>Book Spot</NavLink>
      </div>
      <div className='navlink-text'>
      <NavLink  to='/bookings'>My Bookings</NavLink>
      </div>
    </div>
  );
};
export default NavBar;
