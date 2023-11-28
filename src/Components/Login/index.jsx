import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [formLoginData, setFormLogin] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formLoginData

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Welcome to ParkSpot
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="emailOrPhone" className="form-label">
                  Email or Phone Number:
                </label>
                <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
              </div>
              <div className="modal-footer justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>

          <hr className="my-4" />
          <p>Or</p>
          <div className="d-flex flex-column align-items-center">
            <button className="btn btn-primary btn-md mb-2 w-100 custom-modal-button facebook">
              <i className="fab fa-facebook"></i> Continue with Facebook
            </button>
            <button className="btn btn-primary btn-md w-100 custom-modal-button email">
              <i className="fas fa-envelope"></i> Continue with Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
