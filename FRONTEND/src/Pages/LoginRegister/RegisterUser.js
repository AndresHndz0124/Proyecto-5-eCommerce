import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from "../Header";
import FooterPage from "../footer";
import { Container } from 'react-bootstrap'
import UserContextProvider from '../../context/ContexUser'

function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			// Realizar solicitud de registro de usuario
			const response = await axios.post('http://localhost:4000/Users/registerUser', {
				name,
				email,
				password,
			});

			console.log('Registro de usuario exitoso!');
			toast.success('Registro de usuario exitoso!');
			navigate('/login');

		} catch (error) {
			console.log('Error al registrar usuario:', error);
			toast.error('Error al registrar usuario. Por favor, inténtalo de nuevo.');
		}
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
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
								<h2 className='text-center mb-4'>Registro</h2>
								<Form onSubmit={handleSubmit}>
									<Form.Group id='name'>
										<Form.Label className='mt-2'>Nombre</Form.Label>
										<Form.Control type='text' value={name} onChange={handleNameChange} required />
									</Form.Group>
									<Form.Group id='email'>
										<Form.Label className='mt-2'>Correo electrónico</Form.Label>
										<Form.Control type='email' value={email} onChange={handleEmailChange} required />
									</Form.Group>
									<Form.Group id='password'>
										<Form.Label className='mt-2'>Contraseña</Form.Label>
										<Form.Control type='password' value={password} onChange={handlePasswordChange} required />
									</Form.Group>
									<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
										Registrar
									</Button>
								</Form>
								<ToastContainer />
							</Card.Body>
						</Card>
						<div className='w-100 text-center mt-2'>
							¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link>
						</div>
					</div>
				</Container>
			</UserContextProvider>
			<FooterPage />
		</React.Fragment>
	);
}

export default Signup;
