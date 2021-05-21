import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfile } from '../redux/actions/user';

import '../styles/deleteProfile.scss';

const DeleteProfile = () => {
  const dispatch = useDispatch();

  const deleteMyProfile = () => {
    let idToDelete = JSON.parse(sessionStorage.getItem('user')).userId;
    console.log(idToDelete);
    if (window.confirm('Are you sure you want to delete this profile?')) {
      dispatch(deleteProfile(idToDelete));
    }
  };
  return (
    <div onClick={deleteMyProfile} className='delete-profile'>
      DELETE PROFILE
    </div>
  );
};

export default DeleteProfile;
