import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'react-bootstrap'
import useForm from '../../hook/useForm'

function Login({ modalShow, onHide }) {
  const { error, handleChange, handleSubmit } = useForm()
  return (
    <Modal show={modalShow} size="md" backdrop="static">
      <Modal.Header closeButton onClick={() => onHide(false)}>
        <Modal.Title id="contained-modal-title-vcenter">Welcome to ParkSpot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" autoFocus onChange={handleChange} />
            <p className="mt-2" style={{ color: 'crimson' }}>
              {error.email && error.email}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} />
            <p className="mt-2" style={{ color: 'crimson' }}>
              {error.password && error.password}
            </p>
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Modal.Body>
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
