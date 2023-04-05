import React, { useState,useContext, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header";
import FooterPage from "../footer";
import { Container } from 'react-bootstrap'
import { UserContext} from '../../context/userContext'


function Signup() {
	const userCtx = useContext(UserContext)
	const { authStatus, registerUser } = userCtx

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	useEffect(() => {
		if (authStatus) navigate('/')
	  }, [authStatus])


	const handleSubmit = async (event) => {
		event.preventDefault();
		// registerUser({name,email,password})
		// try {
		// 	// Realizar solicitud de registro de usuario
		// 	const response = await clienteAxios.post('http://localhost:4000/Users/registerUser', {
		// 		name,
		// 		email,
		// 		password,
		// 	});

		// 	console.log('Registro de usuario exitoso!');
		// 	toast.success('Registro de usuario exitoso!');
	

		// } catch (error) {
		// 	console.log('Error al registrar usuario:', error);
		// 	toast.error('Error al registrar usuario. Por favor, inténtalo de nuevo.');
		// }
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
							</Card.Body>
						</Card>
						<div className='w-100 text-center mt-2'>
							¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link>
						</div>
					</div>
				</Container>
			<FooterPage />
		</React.Fragment>
	);
}

export default Signup;
