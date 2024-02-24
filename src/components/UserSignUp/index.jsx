import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import useFormSpot from '../../hook/useFormSpot'
import styles from './styles.module.css'

function UserSignUp() {
  const { form, handleSubmit, handleChange, errors } = useFormSpot()
  const { username, email, password, confirmPassword } = form

  function onSubmit(data, e) {
    console.log(data)
  }

  return (
    <section className="signUp py-5">
      <Container>
        <Row className={` mx-auto justify-content-center`}>
          <Col lg={8}>
            <h1 className="text-center mb-4">Sign Up As User</h1>
            <Form
              className={`${styles.formBody} py-4 px-3`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={username}
                  isInvalid={!!errors.username}
                  onChange={(e) => handleChange(e)}
                />

                <Form.Control.Feedback type="invalid">
                  {errors?.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
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
                  value={password}
                  isInvalid={!!errors.password}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  isInvalid={!!errors.confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.confirmPassword}
                </Form.Control.Feedback>
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
