import { Button, Form, Modal } from 'react-bootstrap'

type LoginProps = {
  modalShow: boolean
  onHide: (val: boolean) => void
}

function Login({ modalShow, onHide }: LoginProps) {
  return (
    <Modal show={modalShow} backdrop="static">
      <Modal.Header closeButton onClick={() => onHide(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to ParkSpot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" />
            <Form.Control.Feedback type="invalid">
              {/* {errors?.email} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" />
            <Form.Control.Feedback type="invalid">
              {/* {errors?.password} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Login
