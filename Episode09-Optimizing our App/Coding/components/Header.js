import logo from "../../Coding/images/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
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
const Header = () => {
  //let btnName = "Login";
  const onlineStatus = useOnlineStatus();
  const [isUserLogin, setUserLogin] = useState(true);
  const navigate = useNavigate();
  const [btnNameReact,setbtnNameReact] = useState("Login")
  return (
    <div className="header">
      <Title title="Chatore" />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
          {/*<button
            className="loginbtn"
            onClick={() => {
              //btnName = "Logout";
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
              //console.log(btnNameReact);
            }}
          >
            {btnNameReact} {onlineStatus ? "🟢" : "🔴"}
          </button>*/}
        </ul>
      </div>
    </div>
  );
};

export default Header;
