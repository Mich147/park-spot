import { ReactNode, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getTheUser } from '../features/auth/Login/auth.slice'
import { AppDispatch, RootState } from '../store'

function PrivateRoute({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>()

  const auth = useSelector((state: RootState) => state.auth)

  const isLoading = auth.status === 'loading'

  useEffect(() => {
    dispatch(getTheUser())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  // const isTrue = true

  return auth?.isUserLoggedIn && auth.user ? (
    children
  ) : (
    <Navigate to="/signup" replace />
  )
  // return isTrue ? children : <Navigate to="/signup" replace />
}

export default PrivateRoute
