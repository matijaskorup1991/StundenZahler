import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/user';
import SideNav from './SideNav';
import DeleteProfile from './DeleteProfile';

import '../styles/header.scss';

const Header = () => {
  let sideNv = document.querySelector('.side-nav');

  const history = useHistory();

  const [sideNav, setSideNav] = useState(false);

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userReducer);
  const { user } = userInfo;
  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

  const openSideNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <>
      <div className='header'>
        <h2>{user.username}</h2>
        <div classList='header-nav-links'>
          <NavLink activeStyle={{ color: 'red' }} to='/home'>
            Home
          </NavLink>
          <NavLink activeStyle={{ color: 'red' }} to='/months'>
            My Months
          </NavLink>
          <NavLink activeStyle={{ color: 'red' }} to='/days'>
            Add Work Day
          </NavLink>
          <div onClick={logoutUser}>Logout</div>
        </div>
      </div>
      <div
        className={sideNav ? 'hamburger change-hamburger' : 'hamburger'}
        onClick={openSideNav}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <SideNav
        classes={sideNav ? 'side-nav side-nav-show' : 'side-nav'}
        onClick={logoutUser}
      />
      <DeleteProfile />
    </>
  );
};

export default Header;
