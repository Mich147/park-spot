import { useState } from 'react'
import { createUser } from '../services/apiAuth'

function useSignup() {
  const [status, setStatus] = useState('idle')

  async function signUp(data) {
    try {
      setStatus('loading')
      //fetch data here
      await createUser(data)
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return { status, signUp }
}

export default useSignup
