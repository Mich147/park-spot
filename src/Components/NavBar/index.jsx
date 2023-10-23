import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu'
import Login from '../Login'
import Logo from '../Logo'
import UserOption from '../UserOption'

function NavBar() {
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
          <Login />
          <UserOption />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
