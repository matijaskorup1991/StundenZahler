import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sideNav.scss';

const SideNav = ({ onClick, classes }) => {
  return (
    <div className={classes}>
      <ul>
        <li>
          <NavLink activeStyle={{ color: 'red' }} to='/home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'red' }} to='/months'>
            My Months
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: 'red' }} to='/days'>
            Add Work Day
          </NavLink>
        </li>
        <li>
          <div onClick={onClick}>Logout</div>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
