import logo from "../../Coding/images/logo.png";
import { useState } from "react";

const Header = () => {
  //let btnName = "Login";
  const [btnNameReact,setbtnNameReact] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="chatore" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
