import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/NavBar'
import './User-Signup.css'

import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config.js'

function UserSignup() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    cPassword: '',
  })

  const [error, setError] = useState('')
  const [createdUser, setCreatedUser] = useState(null)

  const { username, email, password, cPassword } = userData

  // const navigate = useNavigate()

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password === cPassword) {
        const auth = getAuth()
        const userCreadential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCreadential.user
        setCreatedUser(userCreadential)
        updateProfile(auth.currentUser, { displayName: username })

        const userDataCopy = { ...userData }
        delete userDataCopy.password
        delete userDataCopy.cPassword
        userDataCopy.timeStamp = serverTimestamp()

        await setDoc(doc(db, 'users', user.uid), userDataCopy)
      } else {
        setError('Password did not match')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="row mt-5 mb-5">
          <div className="form-body col-md-4 mx-auto">
            <h3 className="text-center mb-4">Sign Up As User</h3>

            {createdUser ? (
              <h1>You can now login</h1>
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input type="text" className="form-control" value={username} name="username" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" value={email} name="email" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" value={password} name="password" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input type="password" className="form-control" value={cPassword} name="cPassword" onChange={handleChange} />
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="idUpload" className="form-label">
                      Upload Valid ID
                    </label>
                    <input type="file" className="form-control" id="idUpload" name="idUpload" accept=".jpg, .jpeg, .png, .pdf" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="terms" />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the{' '}
                      <Link to="terms.html" target="_blank">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                  <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-3 text-center">
                  Already have an account? <a href="login.html">Log in</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default UserSignup
