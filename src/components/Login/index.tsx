import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Modal } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginShema } from '../../helper/formSchema'
import { LoginTypes } from '../../types'

type LoginProps = {
  modalShow: boolean
  onHide: (val: boolean) => void
}

function Login({ modalShow, onHide }: LoginProps) {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(loginShema),
  })

  const { errors } = formState

  const onLoginSubmitHandler: SubmitHandler<LoginTypes> = (data) =>
    console.log(data)

  return (
    <Modal show={modalShow} backdrop="static">
      <Modal.Header closeButton onClick={() => onHide(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to ParkSpot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Login
