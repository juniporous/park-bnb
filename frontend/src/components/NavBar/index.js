import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar-div'>
      <div>
        <NavLink activeClassName='navlink-text' to='/'>My Spots</NavLink>
      </div>
      <div className='navlink-text'>
        <NavLink  to='/create'>Create</NavLink>
      </div>
    </div>
  );
};
export default NavBar;
