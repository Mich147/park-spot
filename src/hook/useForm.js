import { useState } from 'react'

function useForm() {
  const [user, setUser] = useState({})
  const [error, setError] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(validateForm(user))
  }

  return { error, handleChange, handleSubmit }
}

function validateForm(user) {
  const message = {}

  if (!user.username) {
    message.username = 'Please provide username'
  }

  if (!user.email) {
    message.email = 'Please provide email'
  }
  if (!user.password) {
    message.password = 'Please provide password'
  }

  if (!user.confirmPassword) {
    message.confirmPassword = 'Please confirm password'
  } else if (user.password !== user.confirmPassword) {
    message.confirmPassword = 'Password did not matched'
  }

  return message
}

export default useForm
