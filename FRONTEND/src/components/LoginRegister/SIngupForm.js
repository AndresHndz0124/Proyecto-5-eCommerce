import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Singup from './Singup'
import LoginForm from './Login'
import CheckOut from '../../Pages/CheckOut'
import Cart from '../../Pages/Home'
import ForgotPassword from './ForgotPassword'
import PrivateRoutes from '../Auth/PrivateRoutes'
import Header from "../Header";
import FooterPage from "../footer";


function App() {
	return (
		<React.Fragment>
		<Header />
		<Container className='form aling-items-center' style={{ minHeight: '100vh' }}>
			<div className='w-100' style={{ maxWidth: '400px' }}>
				<Routes>

{/* OJO POSIBLMENTE LLEVE AL HOME REPETIDO PORQUE ESTA DENTRO DEL HEADER */}

				{/* LLeva al home */}
					<Route path='/' element={<Cart />} />  
					<Route element={<PrivateRoutes />}>
					{/* <Route path='/CheckOut' element={<CheckOut />} /> */}
					</Route>

					<Route path='/login' element={<LoginForm />} />
					<Route path='/singup' element={<Singup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
			</div>
		</Container>
		<FooterPage />
        </React.Fragment>
	)
}

export default App
