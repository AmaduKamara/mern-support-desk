import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1 className="font-bold text-xl">
            <span className="text-cyan-500">Support</span> Desk
          </h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser className="text-cyan-600" /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
