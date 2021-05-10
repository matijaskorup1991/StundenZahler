import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/user';
import '../styles/header.scss';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userReducer);
  const { user } = userInfo;
  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };
  return (
    <div className='header'>
      <h2>{user.username}</h2>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/months'>My Months</Link>
        <Link to='/days'>Add Work Day</Link>
        <div onClick={logoutUser}>Logout</div>
      </div>
    </div>
  );
};

export default Header;
