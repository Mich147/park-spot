import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { useEffect, useRef } from 'react'
import useForm from '../../hook/useForm'
import styles from './styles.module.css'

function UserSignUp() {
  const { error, handleChange, handleSubmit } = useForm()
  const userRef = useRef(null)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  return (
    <section className="signUp py-5">
      <Container>
        <Row className={` mx-auto justify-content-center`}>
          <Col lg={8}>
            <h1 className="text-center mb-4">Sign Up As User</h1>
            <Form className={`${styles.formBody} py-4 px-3`} onSubmit={handleSubmit}>
              <Form.Group className="">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" ref={userRef} name="username" onChange={handleChange} />
                <p style={{ color: 'crimson' }}> {error.username && error.username}</p>
                {/* {error.username && <p className=''>{error.username}</p>} */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" autoComplete="off" onChange={handleChange} />
                <p style={{ color: 'crimson' }}> {error.email && error.email}</p>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" autoComplete="off" onChange={handleChange} />
                <p style={{ color: 'crimson' }}> {error.password && error.password}</p>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" onChange={handleChange} />
                <p style={{ color: 'crimson' }}> {error.confirmPassword && error.confirmPassword}</p>
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
