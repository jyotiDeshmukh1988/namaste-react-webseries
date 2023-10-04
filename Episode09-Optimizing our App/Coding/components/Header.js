import logo from "../../Coding/images/logo.png";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";

const Header = () => {
  //let btnName = "Login";
  const onlineStatus = useOnlineStatus();
  const [btnNameReact,setbtnNameReact] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
      <Link to="/"><img src={logo} alt="chatore" className="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button
            className="loginbtn"
            onClick={() => {
              //btnName = "Logout";
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
              //console.log(btnNameReact);
            }}
          >
            {btnNameReact} {onlineStatus ? "🟢" : "🔴"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
