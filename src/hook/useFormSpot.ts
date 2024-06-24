import { useState } from 'react'

function useFormSpot() {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(callback) {
    return function (e) {
      e.preventDefault()
      const signupErrors = validate(form)

      if (Object.keys(signupErrors).length === 3) {
        setErrors(signupErrors)
      } else if (Object.keys(signupErrors).length === 2) {
        setErrors(signupErrors)
      } else {
        setErrors({})
        setForm({})
        return callback(form, e)
      }
    }
  }

  return { handleSubmit, handleChange, form, errors }
}

export default useFormSpot

function validate(form) {
  let errors = {}

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
  }

  return errors
}
