import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/ContexUser'

function PrivateRoutes() {
	const { authStatus, VeryfyingToken } = useContext(UserContext)
	useEffect(() => {
		VeryfyingToken()
	}, [])

	return authStatus ? <Outlet /> : <Navigate to='/CheckOut' replace />
}

export default PrivateRoutes
