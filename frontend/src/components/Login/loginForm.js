import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      navigate('/home');
    } else {
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>GİRİŞ YAP</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Giriş Yap</button>
        </form>
        <p>
          Bir hesabınız yok mu? <Link to="/signup">Şimdi kaydolun.</Link>
        </p>
      </div>
      <div className="login-image">
        <img
          src="/Bg.avif"
          alt="Robot plugging in"
        />
      </div>
    </div>
  );
}

export default LoginForm;