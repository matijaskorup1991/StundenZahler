import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/user';
import '../styles/header.scss';

const Header = () => {
  const history = useHistory();

  const [sideNav, setSideNav] = useState(false);

  // useEffect(() => {}, [sideNav]);

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
    </>
  );
};

export default Header;
