import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { useForm } from 'react-hook-form'
import styles from './styles.module.css'

import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../helper/formSchema'
import { RegisterTypes } from '../../types'

function UserSignUp() {
  const { register, handleSubmit, formState } = useForm<RegisterTypes>({
    resolver: yupResolver(registerSchema),
  })
  const { errors } = formState

  function registerHandler(data: RegisterTypes) {
    console.log(data)
  }

  // if (isLoading) {
  //   return (
  //     <div className="d-flex justify-content-center">
  //       <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //     </div>
  //   )
  // }

  const isSigningSuccess: boolean = false

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
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserSignUp
