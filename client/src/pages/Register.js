import React, { useState } from "react";
import Input from "../components/input/Input";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className='register-page'>
      <h2>Register</h2>
      <div className='register-form'>
        <Input label='Username' type='text' value={username} />
        <p>Email</p>
        <input type='email' value={email} />
        <p>Password</p>
        <input type='password' value={password} />
        <p>Repeat Password</p>
        <input type='password' value={password2} />
      </div>
    </div>
  );
};

export default Register;
