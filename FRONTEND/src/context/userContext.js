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
      // localStorage.setItem('email', email);

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

      const userResponse = await clienteAxios.get(`/users/email/${email}`);
      const { id, username } = userResponse.data;
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', email);
      localStorage.setItem('id', id);
      localStorage.setItem('username', username);
      
      setAuthStatus(true);
      setUserData(response.data.user);
    } catch (error) {
      console.log('Email o contraseña incorrectos.');
      toast.error('Email o contraseña incorrectos.');
      setAuthStatus(false);
      setUserData({});
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('id');
      localStorage.removeItem('username');
    }
  };

  const forgotPassword = async (email) => {
    try {
      console.log('Se envió un correo electrónico con instrucciones para restablecer su contraseña.');
    } catch (error) {
      console.log('Error al enviar el correo electrónico.');
    }
  };
  

  const logout = () => {
    localStorage.removeItem('token');
    setAuthStatus(false);
    setUserData({});
  };
  
  const userSubmitForm = async (data) => {
        
    console.log("Actualizar datos de usuario")
    const res = await clienteAxios.put("/Users/Update", data)

    console.log(res)

}


  useEffect(() => {
    VeryfyingToken();
  }, []);



const data = { registerUser, loginUser, handleChange,VeryfyingToken,logout,forgotPassword,userSubmitForm, userData, authStatus }
// console.log('CONTEXTO USUARIO', data)
return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}