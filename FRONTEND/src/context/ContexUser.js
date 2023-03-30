import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    verifyingToken();
  }, []);

  const verifyingToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post('http://localhost:4000/Users/verify', {
          token,
        });
        if (response.status === 200) {
          setAuthStatus(true);
          setUserData(response.data.user);
        }
      } catch (error) {
        console.log('Token inválido');
        setAuthStatus(false);
        setUserData({});
      }
    } else {
      setAuthStatus(false);
      setUserData({});
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/Users/login', {
        email,
        password,
      });
      setAuthStatus(true);
      setUserData(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log('Email o contraseña incorrectos.');
      setAuthStatus(false);
      setUserData({});
      localStorage.removeItem('token');
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4000/Users/register', userData);
      setAuthStatus(true);
      setUserData(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log('Error al registrar el usuario.');
      setAuthStatus(false);
      setUserData({});
      localStorage.removeItem('token');
    }
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const logout = () => {
    setAuthStatus(false);
    setUserData({});
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ authStatus, userData, loginUser, registerUser, handleChange, verifyingToken, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

