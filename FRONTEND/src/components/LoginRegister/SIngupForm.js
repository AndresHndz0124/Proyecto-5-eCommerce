import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Singup from './Singup'
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import ForgotPassword from './ForgotPassword'
import PrivateRoutes from '../Auth/PrivateRoutes'

function App() {
	return (
		<Container className='d-flex aling-items-center justify-content-center' style={{ minHeight: '100vh' }}>
			<div className='w-100' style={{ maxWidth: '400px' }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route element={<PrivateRoutes />}>
					<Route path='/dashboard' element={<Dashboard />} />
					</Route>

					<Route path='/login' element={<Login />} />
					<Route path='/singup' element={<Singup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
			</div>
		</Container>
	)
}

export default App
