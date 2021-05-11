import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../redux/actions/user';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, history));
  };
  return (
    <div className='register-page'>
      <Form formHeading='LOGIN' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          required
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className='form-submit' type='submit' value='SUBMIT' />
        <p>
          Don't have an Account?
          <span>
            <Link to='/register'> Register here</Link>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Login;
