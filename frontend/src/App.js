import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/header';
import LoginForm from './components/Login/loginForm';
import HomePage from './components/Page/homePage';
import PredictionPage from './components/Page/predictionPage';
import { Route, Routes } from "react-router-dom";
import SignUpForm from './components/SignUp/signupForm';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
      <Header />
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/prediction" element={<PredictionPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
