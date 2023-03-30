import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from "../Header";
import FooterPage from "../footer";
import { Container } from 'react-bootstrap'
import UserContextProvider from '../../context/ContexUser'


function ForgotPassword() {
	const emailRef = useRef()
	const navigate = useNavigate()

	//logica de como restablecer la contraseña
	const handleSubmit = (e) => {
		e.preventDefault()
		const email = emailRef.current.value
		localStorage.setItem('user', JSON.stringify({ email }))
		navigate('/')
	}

	return (
		<React.Fragment>
			<Header />
			<UserContextProvider>
				<Container className='form aling-items-center' style={{ minHeight: '100vh' }}>
					<div className='w-100' style={{ maxWidth: '400px' }}>
						<Card>
							<Card.Body>
								<h2 className='text-center mb-4'>Restablecer contraseña</h2>
								<Form onSubmit={handleSubmit}>
									<Form.Group id='email'>
										<Form.Label className='mt-2'>Correo electrónico</Form.Label>
										<Form.Control type='email' ref={emailRef} required />
									</Form.Group>
									<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
										restablecer la contraseña
									</Button>
								</Form>
								<div className='w-100 text-center mt-3'>
									<Link to='/login'>Iniciar Sesión</Link>
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

export default ForgotPassword
