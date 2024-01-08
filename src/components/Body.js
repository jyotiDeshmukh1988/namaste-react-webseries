import RestaurantCard from "./RestaurantCard.js"; // you rename the default directly without using "as" alias for eg: import RestCard from "./RestaurantCard";
import { useEffect, useState } from "react"; // this is named export
import Shimmer from "./Shimmer.js"; // this is default export
import { SWIGGY_API_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import Carousel from "./Carousel.js";

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
      console.log(json);
      // optional chaining
      setlistofRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setwhatNew(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info)
    } catch (e) {
      //console.log(e);
      setlistofRestaurants([]);
      setFilteredList([]);
      setwhatNew([]);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline !! Please check your internet connection.</h1>
  }

  // ternary operator rendering
  return listofRestaurants && listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex-col flex">
        <Carousel newItem={whatNew}/>
      </div>
      <div className="filter flex items-center justify-center my-8">
        <div className="w-1/3 flex">
          <input
            type="text"
            className="search-box block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 shadow-sm sm:text-sm"
            value={searchText} placeholder="Search ..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border-slate-300 rounded-md border py-2 px-5 bg-neutral-500 text-white"
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
        <div className="w-1/3">
        <button
          className="filter-btn ml-5"
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
      </div>
      <div className="flex gap-5 flex-wrap">
        {filteredList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} className="w-[300px] p-2 mb-2 shadow-lg rounded-md">
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
