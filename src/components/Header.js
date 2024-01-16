import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import { useDarkMode } from "../hooks/useDarkMode.js";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
import { useSelector } from "react-redux";
// Title component for display logo
export const Title = ({ title }) => {
  return (
    <div className="logo-container px-5 flex justify-center items-center">
      <Link to="/" className="text-lg font-bold">
        Food Zone
      </Link>
    </div>
  );
};
const Header = () => {
  //let btnName = "Login";
  const onlineStatus = useOnlineStatus();
  const [theme, toggleTheme] = useDarkMode();
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [isUserLogin, setUserLogin] = useState(loginData);
  const navigate = useNavigate();
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const { email } = isUserLogin ? isUserLogin : "";
  const username = email && email.split("@")[0];
  if (theme === "dark") {
    document.body.classList.add("dark-layout");
    document.body.classList.remove("light-layout");
  } else {
    document.body.classList.add("light-layout");
    document.body.classList.remove("dark-layout");
  }

  // subscribe to the store using selector
  const cartItems = useSelector((state) => {
   // console.log(state.items);
    return state.cart.items;
  });
  //console.log(cartItems);
  return (
    <div className="header flex items-center justify-between py-6 shadow-lg fixed w-full z-10">
      <Title title="Chatore" />
      <div className="nav-items px-5">
        <ul className="flex tracking-widest">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          {/*<li className="px-4">
            <Link to="/grocery">Grocery</Link>
  </li>*/}
          <li className="px-4">
            {/* use conditional rendering for login and logout */}
            {isUserLogin ? (
              <button
                className="loginbtn tracking-widest"
                onClick={() => {
                  setUserLogin(localStorage.removeItem("loginData"));
                  navigate("/login");
                }}
              >
                Hi {username} Logout
              </button>
            ) : (
              <button
                className="loginbtn tracking-widest"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </li>
          <li className="px-4">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping "></i>
              <span className="absolute top-5 right-19 text-xs text-center bg-pink-800 w-4 h-4 rounded-full text-white">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className="px-4">
            <div onClick={toggleTheme} className="switchbtn">
              {theme === "dark" ? (
                <MdOutlineNightlight size={20} />
              ) : (
                <WiDaySunny size={25} />
              )}
            </div>
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
