import { yupResolver } from '@hookform/resolvers/yup'
import { RootState } from '@reduxjs/toolkit/query'
import { useEffect, useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginShema } from '../../../helper/formSchema'
import { AppDispatch } from '../../../store'
import { LoginTypes } from '../../../types'
import { clearError, login } from './auth.slice'

type LoginProps = {
  modalShow: boolean
  onHide: (val: boolean) => void
}

function Login({ modalShow, onHide }: LoginProps) {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(loginShema),
  })

  const navigate = useNavigate()

  const { errors } = formState

  const { status, error } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch<AppDispatch>()

  const isLoading = status === 'loading'

  const [loginSuccess, setLoginSuccess] = useState(false)

  const onLoginSubmitHandler: SubmitHandler<LoginTypes> = async (data) => {
    const resultAction = await dispatch(login(data))
    if (login.fulfilled.match(resultAction)) {
      setLoginSuccess(true)
    }
  }

  useEffect(() => {
    if (loginSuccess) {
      navigate('/dashboard')
      onHide(false)
    }
  }, [loginSuccess, navigate, onHide])

  return (
    <Modal show={modalShow} backdrop="static">
      <Modal.Header
        closeButton
        onClick={() => {
          onHide(false)
          dispatch(clearError())
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to ParkSpot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onLoginSubmitHandler)} noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                {...register('email')}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {/* {errors?.email} */}
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
                {/* {errors?.password} */}

                {errors?.password?.message}
              </Form.Control.Feedback>
              {error ? <p>{error}</p> : ''}
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default Login
