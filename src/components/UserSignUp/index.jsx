import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFormSpot from '../../hook/useFormSpot'
import useSignup from '../../hook/useSignup'
import styles from './styles.module.css'

function UserSignUp() {
  const { form, handleSubmit, handleChange, errors } = useFormSpot()
  const { email, password, confirmPassword } = form
  const { signUp, status } = useSignup()

  const navigate = useNavigate()
  const { isLoading, isUserLoggedIn } = useSelector((state) => state.auth)

  const isSigning = status === 'loading'
  const isSigningSuccess = status === 'success'

  async function onSubmit(data) {
    delete data.confirmPassword
    await signUp(data)
    localStorage.clear()
  }

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/dashboard')
    }
  }, [isUserLoggedIn, navigate])

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <section className="signUp py-5">
      <Container>
        <Row className={` mx-auto justify-content-center`}>
          <Col lg={8}>
            {isSigningSuccess ? (
              <h1 className="text-center mb-4">You may login now</h1>
            ) : (
              <>
                <h1 className="text-center mb-4">Sign Up As User</h1>
                <Form
                  className={`${styles.formBody} py-4 px-3`}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email || ''}
                      isInvalid={!!errors?.email}
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
                      isInvalid={!!errors?.password}
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
                      value={confirmPassword || ''}
                      isInvalid={!!errors?.confirmPassword}
                      onChange={(e) => handleChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    {isSigning ? (
                      <Spinner animation="border" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      'Sign Up'
                    )}
                  </Button>
                  {/* <Button variant="primary" type="submit">
                Sign Up
              </Button> */}
                </Form>
                <p className="mt-3 text-center">
                  Already have an account? <a href="login.html">Log in</a>
                </p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserSignUp
