import React from 'react';
import '../styles/deleteProfile.scss';

const DeleteProfile = ({ onClick }) => {
  return (
    <div onClick={onClick} className='delete-profile'>
      DELETE PROFILE
    </div>
  );
};

export default DeleteProfile;
