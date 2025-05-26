import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signupForm.css';
import axios from 'axios';

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/user/register', formData);
      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('User already exists');
      } else {
        alert('An error occurred');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>KAYDOL</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Ad</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName">Soyad</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Şifre Tekrar</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit">Kaydol</button>
        </form>
        <p>
          Bir hesabınız var mı? <Link to="/">Şimdi giriş yapın.</Link>
        </p>
      </div>
      <div className="signup-image">
        <img
          src="/Bg.avif"
          alt="Robot plugging in"
        />
      </div>
    </div>
  );
}

export default SignUpForm;