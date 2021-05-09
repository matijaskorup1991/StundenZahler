import React, { useState, useReducer } from 'react';
import { register } from '../redux/actions/user';

const Register = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };

  return (
    <div className='register-page'>
      <form onSubmit={registerUser}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          name='password2'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Register;
