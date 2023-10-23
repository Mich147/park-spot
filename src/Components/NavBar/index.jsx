import { Link } from "react-router-dom";
// import Logo from "../../images/Logo.png";
// import BurgerMenu from "../BurgerMenu";
// import UserOption from "../UserOption";
// import Login from "../Login";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
      <div className="container-fluid">
        {/* <Logo />
        <BurgerMenu /> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOW IT WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                LISTING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                BLOGS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HELP
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          {/* <Login />
          <UserOption /> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
