import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isUser = true
  return isUser ? children : <Navigate to="/signup" replace />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
