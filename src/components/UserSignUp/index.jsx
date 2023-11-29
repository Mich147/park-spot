import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import styles from './styles.module.css'

function UserSignUp() {
  return (
    <section className="signUp py-5">
      <Container>
        <Row className={` mx-auto justify-content-center`}>
          <Col lg={8}>
            <h1 className="text-center mb-4">Sign Up As User</h1>
            <Form className={`${styles.formBody} py-4 px-3`}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" autoComplete="off" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" autoComplete="off" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Already have an account? <a href="login.html">Log in</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserSignUp
