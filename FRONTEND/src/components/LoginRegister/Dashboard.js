import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
	const navigate = useNavigate()

	function handleLogout() {
		//logica de como cerrar sesion
		localStorage.clear()
		navigate('/login')
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Perfil</h2>
					<strong>Correo electrónico:</strong> {JSON.parse(localStorage.getItem('user')).email}
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				<Button variant='link' onClick={handleLogout}>
					Cerrar Sesión
				</Button>
			</div>
		</>
	)
}
