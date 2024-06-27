import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'

import { useForm } from 'react-hook-form'
import styles from './styles.module.css'

import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { registerSchema } from '../../../helper/formSchema'
import { AppDispatch, RootState } from '../../../store'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterTypes } from '../../../types'
import { registerUser, reset } from './register.slice'

function Register() {
  const {
    register,
    handleSubmit,
    formState,
    reset: resetFormInputs,
  } = useForm<RegisterTypes>({
    resolver: yupResolver(registerSchema),
  })
  const { errors } = formState
  const navigate = useNavigate()

  const auth = useSelector((state: RootState) => state.auth)

  const [err, setErr] = useState<string>('')

  const { status, message } = useSelector((state: RootState) => state.register)
  const isLoading = status === 'loading'
  const isSuccess = status === 'success'
  const isError = status === 'error'

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (isError) {
      setErr(message)
    }

    if (auth.user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [auth.isUserLoggedIn, auth.user, navigate, isError, message])

  function registerHandler(data: RegisterTypes) {
    dispatch(registerUser(data))
    resetFormInputs()
  }

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
            {isSuccess ? (
              <h1 className="text-center mb-4">You may login now</h1>
            ) : (
              <>
                <h1 className="text-center mb-4">Sign Up As User</h1>
                <Form
                  noValidate
                  className={`${styles.formBody} py-4 px-3`}
                  onSubmit={handleSubmit(registerHandler)}
                >
                  <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      {...register('email')}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {/* {errors?.email && errors?.email.message} */}
                      {errors?.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      {...register('password')}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {/* {errors?.password && errors?.password.message} */}
                      {errors?.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      {...register('confirmPassword')}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {/* {errors?.confirmPassword &&
                        errors?.confirmPassword.message} */}
                      {errors?.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </>
            )}

            {/* {isError && <p className="lead">{message}</p>} */}
            {err && (
              <div className="mt-3 alert alert-danger" role="alert">
                {err}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
