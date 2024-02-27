import PropTypes from 'prop-types'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../features/auth/auth.slice'
import useFormSpot from '../../hook/useFormSpot'

function Login({ modalShow, onHide }) {
  const { handleChange, handleSubmit, form, errors } = useFormSpot()
  const { email, password } = form

  const { isLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  function onSubmit(data) {
    dispatch(login(data))
    onHide(false)
    navigate('/dashboard')
  }

  return (
    <Modal show={modalShow} size="md" backdrop="static">
      {isLoading ? (
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </Modal.Body>
      ) : (
        <>
          <Modal.Header closeButton onClick={() => onHide(false)}>
            <Modal.Title id="contained-modal-title-vcenter">
              Welcome to ParkSpot
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email || ''}
                  isInvalid={!!errors.email}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password || ''}
                  isInvalid={!!errors.password}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
          </Modal.Body>
        </>
      )}
      {/* <Modal.Footer>
          
        </Modal.Footer> */}
    </Modal>
  )
}

Login.propTypes = {
  modalShow: PropTypes.bool,
  onHide: PropTypes.func,
}

export default Login
