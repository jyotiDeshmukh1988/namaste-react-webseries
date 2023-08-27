import RestaurantCard from "./RestaurantCard"; // you rename the default directly without using "as" alias for eg: import RestCard from "./RestaurantCard";
import { resList as ResList } from "../utils/mockData"; // you rename the named export using "as" alias
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(ResList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            const filterlist = listofRestaurants.filter((restaurant) => {
              //console.log(restaurant);
              const {avgRating} = restaurant.info;
              return avgRating > 4;
            });
            console.log(filterlist);
            setlistofRestaurants(filterlist);
          }}
        >
          <i className="fa-solid fa-star"></i> Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
