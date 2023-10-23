import logoImage from "../../images/Logo.png";
import { Link } from "react-router-dom/dist";

function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src={logoImage}
        alt="Logo"
        height="30"
        className="d-inline-block align-top"
      />
    </Link>
  );
}

export default Logo;
