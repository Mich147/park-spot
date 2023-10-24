import { Link, useNavigate } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu'
import Logo from '../Logo'
import UserOption from '../UserOption'

import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'

function NavBar() {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  const navigate = useNavigate()

  const handleLogOut = () => {
    auth.signOut()
    navigate('/')
  }

  useEffect(() => {
    setUser(auth.currentUser)
  }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
      <div className="container-fluid">
        <Logo />
        <BurgerMenu />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">
                HOW IT WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listing">
                LISTING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                BLOGS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                HELP
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          {user ? (
            <button type="button" className="btn btn-primary login-button me-2" onClick={handleLogOut}>
              LOGOUT
            </button>
          ) : (
            <>
              <button type="button" className="btn btn-primary login-button me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                LOGIN
              </button>
              <UserOption />
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
