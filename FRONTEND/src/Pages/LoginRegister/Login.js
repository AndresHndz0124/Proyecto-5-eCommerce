import React, { useState, useEffect, useContext } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header";
import FooterPage from "../footer";
import { Container } from 'react-bootstrap'
import { UserContext} from '../../context/userContext'

export default function LoginForm() {
	const userCtx = useContext(UserContext)
	const { loginUser, authStatus, VeryfyingToken } = userCtx

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	useEffect(() => {
		VeryfyingToken()

		if (authStatus) {
			navigate('/')
		}
	}, [authStatus])

	if (authStatus) return null

	const handleSubmit = async (event) => {
		event.preventDefault();
		loginUser(email, password)
		// localStorage.setItem('isLoggedIn', true);
		localStorage.setItem('username', email);
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
			<FooterPage />
		</React.Fragment>
	)
}
