import React, { createContext, useState,useEffect } from 'react';
import clienteAxios from '../config/axios';
import { toast } from 'react-toastify';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [userData, setUserData] = useState({});

  const [isLoggedOut, setIsLoggedOut] = useState(false);


  const handleChange = (event) => {
    event.preventDefault()
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (userData) => {
    try {
      const response = await clienteAxios.post('/Users/Create', userData);
      setAuthStatus(true);
      setUserData(response.data.user);
      localStorage.setItem('token', response.data.token);

      console.log('Registro de usuario exitoso!');
			toast.success('Registro de usuario exitoso!');

    } catch (error) {
      console.log('Error al registrar el usuario.');
      toast.error('Error al registrar usuario. Por favor, inténtalo de nuevo.');

      setAuthStatus(false);
      setUserData({});
      localStorage.removeItem('token');
    }
  };

  const VeryfyingToken = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      clienteAxios.defaults.headers.common['x-auth-token'] = token
    } else {
      delete clienteAxios.defaults.headers.common['x-auth-token']
    }

    try {
      // const response = await clienteAxios.post('/Users/verify', {
      //   token,
      // });
      const response = token && (await clienteAxios.get('/Users/verify'))
      if (response.status === 200) {
        setAuthStatus(true);
        setUserData(response.data.user);
      }
    } catch (error) {
      console.log('Token inválido', error);
      setAuthStatus(false);
      setUserData({});
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await clienteAxios.post('/Users/login', {email,password,});
      console.log('datos ingresados',response);
      setAuthStatus(true);
      setUserData(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log('Email o contraseña incorrectos.');
      toast.error('Email o contraseña incorrectos.');
      setAuthStatus(false);
      setUserData({});
      localStorage.removeItem('token');
    }
  };

  const forgotPassword = async (email) => {
    try {
      console.log('Se envió un correo electrónico con instrucciones para restablecer su contraseña.');
    } catch (error) {
      console.log('Error al enviar el correo electrónico.');
    }
  };
  
  // const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token');
    setAuthStatus(false);
    setUserData({});
  };
  

  useEffect(() => {
    VeryfyingToken();
  }, []);



const data = { registerUser, loginUser, handleChange,VeryfyingToken,logout,forgotPassword, userData, authStatus }
// console.log('CONTEXTO USUARIO', data)
return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}