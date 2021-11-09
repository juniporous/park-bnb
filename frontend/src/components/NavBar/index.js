import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Spots</NavLink> |
      </li>
      <li>
        <NavLink to='/create'>Create A Spot</NavLink>
      </li>
    </ul>
  );
};
export default NavBar;
