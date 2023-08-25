import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Coding/logo.png";
import foodmeghna from "../Coding/foodmeghna.jpeg";

/**
## Project Structure 
* Header
*   - Logo
*   - Nav Items
* Body
*   - Search
*   - RestaurantContainer
*       - RestaurantCard
            - image
            - Name of Restaurant, Star rating, cuisine, delivery time
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

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
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
        <img className="res-logo"
        src="https://www.foodbusinessnews.net/ext/resources/2020/5/BKAtHome_Lead.jpg?height=667&t=1588594467&width=1080"
        alt="res-logo"/>
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
