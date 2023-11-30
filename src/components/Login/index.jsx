import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'react-bootstrap'

function Login({ modalShow, onHide }) {
  return (
    <Modal show={modalShow} size="md" backdrop="static">
      <Modal.Header closeButton onClick={() => onHide(false)}>
        <Modal.Title id="contained-modal-title-vcenter">Welcome to ParkSpot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
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
