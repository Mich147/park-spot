import { useState } from 'react'
import { login as loginApi } from '../../services/apiAuth'

function useLogin() {
  const [status, setStatus] = useState('idle')

  async function login(data) {
    setStatus('loading')
    try {
      //fetch data here
      await loginApi(data)
    } catch (error) {
      console.log(error)
      setStatus('error')
    }
  }

  return { status, login }
}

export default useLogin
