import RestaurantCard from "./RestaurantCard"; // you rename the default directly without using "as" alias for eg: import RestCard from "./RestaurantCard";
import { useEffect, useState } from "react"; // this is named export
import Shimmer from "./Shimmer"; // this is default export
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Body = () => {
  // Local state variable - Super powerful variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [whatNew, setwhatNew] = useState([]);

  // Whenver state variable update, react triggers a reconciliation cycle(re-renders the component);
  //console.log("Body rendered");

  // useEffect called after the render of the component has finished
  useEffect(() => {
    //console.log("i am useeffect hook");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // get restaurant data from your location
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
     // console.log(json);
      //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
      // optional chaining
      setlistofRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setwhatNew(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    } catch (e) {
      //console.log(e);
      setlistofRestaurants([]);
      setFilteredList([]);
      setwhatNew([]);
    }
  };
  
  // ternary operator rendering
  return listofRestaurants && listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="res-container">
        <Carousel newItem={whatNew}/>
      </div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // filter the restaurant cards and update the UI
              // get the searchText
              const filtersearchlist = listofRestaurants.filter(
                (item, index) => {
                  //return searchText.indexOf(item);
                  //console.log(item.info.cuisines);
                  return item.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              console.log(filtersearchlist);
              setFilteredList(filtersearchlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            const filterlist = listofRestaurants.filter((restaurant) => {
              //console.log(restaurant);
              const { avgRating } = restaurant.info;
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
        {filteredList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
