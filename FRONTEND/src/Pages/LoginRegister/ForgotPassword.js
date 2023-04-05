import React, { useState, useContext, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from "../Header";
import FooterPage from "../footer";
import { Container } from 'react-bootstrap'
import { UserContext } from '../../context/userContext'
import { toast } from 'react-toastify';

const ForgotPassword = () => {
	const userCtx = useContext(UserContext)
	const { forgotPassword } = userCtx

	// const [email, setEmail] = useState('');
	const navigate = useNavigate()
	const emailRef = useRef();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);


	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError('');
			setLoading(true);
			await forgotPassword(emailRef.current.value);
			toast.success(`Se envió un correo electrónico a ${emailRef.current.value} para restablecer su contraseña.`, {
				onClose: () => navigate('/login')
			});
		} catch (error) {
			setError('No se pudo restablecer la contraseña');
		} finally {
			setLoading(false);
		}
	}




	return (
		<React.Fragment>
			<Header />
			<Container className='form aling-items-center' style={{ minHeight: '100vh' }}>
				<div className='w-100' style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className='text-center mb-4'>Restablecer contraseña</h2>
							{error && <div className='alert alert-danger'>{error}</div>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id='email'>
									<Form.Label className='mt-2'>Correo electrónico</Form.Label>
									<Form.Control type='email' ref={emailRef} required />
								</Form.Group>
								<Button className='w-100 mt-4 btn btn-primary ' type='submit' disabled={loading}>
									Restablecer la contraseña
								</Button>
							</Form>
							<div className='w-100 text-center mt-3'>
								<Link to='/login'>Iniciar Sesión</Link>
							</div>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>
						¿No tienes una cuenta? <Link to='/signup'>Registrarse</Link>
					</div>
				</div>
			</Container>
			<FooterPage />
		</React.Fragment>
	)
}

export default ForgotPassword
