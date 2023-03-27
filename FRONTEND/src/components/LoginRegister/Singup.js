import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Singup() {
	/* Un gancho que te permite usar el estado en componentes funcionales. */
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const navigate = useNavigate()

	/**
	 * Si las variables password y passwordConfirm son iguales, el correo electrónico y la contraseña se
	 * almacenan en localStorage y el usuario navega a la página de inicio. De lo contrario, se muestra un
	 * mensaje de error.
	 * @param event - El objeto de evento que se pasa al controlador de eventos.
	 */
	const handleSubmit = (event) => {
		/* Evita que suceda la acción predeterminada del evento. */
		event.preventDefault()

		if (password === passwordConfirm) {
			localStorage.setItem('user', JSON.stringify({ email, password }))
			navigate('/dashboard')
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Las contraseñas no coinciden. Por favor, inténtelo de nuevo.',
			})
		}
	}

	/* Un componente React. formulario de registro */
	return (
		<>
			<Card className='mt-5'>
				<Card.Body>
					<h2 className='text-center mb-4'>Registro</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label className='mt-2'>Correo electrónico</Form.Label>
							<Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label className='mt-2'>Contraseña</Form.Label>
							<Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
						</Form.Group>
						<Form.Group id='password-confirm'>
							<Form.Label className='mt-2'>Confirmar contraseña</Form.Label>
							<Form.Control type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
						</Form.Group>
						<Button className='w-100 mt-4 btn btn-primary ' type='submit'>
							Registrarse
						</Button>
					</Form>
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link>
			</div>
		</>
	)
}

export default Singup
