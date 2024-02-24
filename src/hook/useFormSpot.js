import { useState } from 'react'

function useFormSpot() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(callback) {
    return function (e) {
      e.preventDefault()
      const formErrors = validate(form)
      console.log(Object.keys(formErrors))
      if (Object.keys(formErrors).length > 0) {
        return setErrors(formErrors)
      }

      return callback(form, e)
    }
  }

  return { handleSubmit, handleChange, form, errors }
}

export default useFormSpot

function validate(form) {
  let errors = {}

  if (!form.username) {
    errors.username = 'username is required'
  }
  if (!form.email) {
    errors.email = 'email is required'
  }

  if (!form.password) {
    errors.password = 'password is required'
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please confirm password'
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Password did not matched'
  } else {
    errors.confirmPassword = ''
  }

  return errors
}
