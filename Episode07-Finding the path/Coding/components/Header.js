import logo from "../../Coding/images/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Title component for display logo
export const Title = ({ title }) => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt={title} className="logo" />
      </Link>
    </div>
  );
};

// Header component for navigation items
const Header = () => {
  // usestate for set user login and logout status
  const [isUserLogin, setUserLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="header">
      <Title title="Chatore" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isUserLogin ? (
              <button
                className="loginbtn"
                onClick={() => {
                  setUserLogin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="loginbtn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
