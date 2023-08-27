import logo from "../../Coding/images/logo.png";

const Header = () => {
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
            <li><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;