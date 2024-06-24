import PropTypes from 'prop-types'
import { ReactNode, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getTheUser } from '../features/auth/auth.slice'
import { AppDispatch, RootState } from '../store'

function PrivateRoute({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>()

  const { isLoading, isUserLoggedIn } = useSelector(
    (state: RootState) => state.auth
  )

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

  return isUserLoggedIn ? children : <Navigate to="/signup" replace />
  // return user && children
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
