import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import PaypalButton from '../Paypal/PaypalButton'

function Home() {
	const { suma, user } = useContext(UserContext)
	console.log('user :', user)
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Bienvenido</h2>
					<p className='text-center'>Esta es una aplicación de prueba para el taller de Login con React </p>
				</Card.Body>
			</Card>

			<div className='w-100 text-center mt-2'>
				¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link>
			</div>

			<div className='w-100 text-center mt-2'>
				¿No tienes una cuenta? <Link to='/singup'>Registrarse</Link>
			</div>

			<PaypalButton total={100} />
		</>
	)
}

export default Home
