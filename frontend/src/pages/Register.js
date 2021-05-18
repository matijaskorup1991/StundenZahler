import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../redux/actions/user';
import Form from '../components/Form';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector((state) => state.userReducer);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    console.log(userData.error);
    dispatch(register(username, email, password, history));
  };

  let errorMessage = userData.error ? (
    <ErrorMessage classMsg='alert' message={userData.error} />
  ) : null;

  return (
    <div className='register-page'>
      {errorMessage}
      <Form onSubmit={registerUser} formHeading='CREATE ACCOUNT'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='Repeat your Password'
          name='password2'
          value={password2}
          required
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input className='form-submit' type='submit' value='SUBMIT' />
        <p>
          Have already an account?{' '}
          <span>
            <Link to='/login'>Login here</Link>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Register;
