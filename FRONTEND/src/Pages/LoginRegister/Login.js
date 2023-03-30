import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from "../Header";
import FooterPage from "../footer";
import { Container } from 'react-bootstrap'
import UserContextProvider  from '../../context/ContexUser'

function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [token, setToken] = useState('');

	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			// Realizar solicitud de inicio de sesión
			const response = await axios.post('http://localhost:4000/Users/login', {
				email,
				password,
			});

			// Extraer el token de la respuesta y almacenarlo en el estado
			setToken(response.data.token);

			console.log('Inicio de sesión exitoso!');

			navigate('/')
		} catch (error) {
			console.log('Email o contraseña incorrectos.');
			toast.error('Email o contraseña incorrectos.');
		}
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<React.Fragment>
			<Header />
			<UserContextProvider>
			<Container className='form aling-items-center' style={{ minHeight: '100vh' }}>
				<div className='w-100' style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className='text-center mb-4'>Iniciar Sesión</h2>
							<Form onSubmit={handleSubmit}>
								<Form.Group id='email'>
									<Form.Label className='mt-2'>Correo electrónico</Form.Label>
									<Form.Control type='email' value={email} onChange={handleEmailChange} required />
								</Form.Group>
								<Form.Group id='password'>
									<Form.Label className='mt-2'>Contraseña</Form.Label>
									<Form.Control type='password' value={password} onChange={handlePasswordChange} required />
								</Form.Group>
								<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
									Iniciar
								</Button>
							</Form>
							<ToastContainer />
							<div className='w-100 text-center mt-3'>
								<Link to='/forgot-password'>Olvidé mi contraseña</Link>
							</div>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>
						¿No tienes una cuenta? <Link to='/singup'>Registrarse</Link>
					</div>
				</div>
			</Container>
			</UserContextProvider>
			<FooterPage />
		</React.Fragment>
	)
}

export default LoginForm
