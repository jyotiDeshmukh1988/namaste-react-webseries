import RestaurantCard, { withFiveStarLabel } from "./RestaurantCard.js"; // you rename the default directly without using "as" alias for eg: import RestCard from "./RestaurantCard";
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
  const [topRestaurant, settopRestaurant] = useState([]);
  const [whatNew, setwhatNew] = useState([]);
  const [isPureVegActive, setPureVegIsActive] = useState(false);
  const [isFastActive, setIsFastActive] = useState(false);
  const [isRatingActive, setIsRatingActive] = useState(false);

  // Higher order component
  const RestaurantCardOnlyFiveStar = withFiveStarLabel(RestaurantCard);

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
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      settopRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setwhatNew(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      console.log(listofRestaurants);
    } catch (e) {
      //console.log(e);
      setlistofRestaurants([]);
      setFilteredList([]);
      settopRestaurant([]);
      setwhatNew([]);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection.
      </h1>
    );
  }

  // ternary operator rendering
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex-col flex pt-16">
       {whatNew && <Carousel newItem={whatNew} />}
      </div>
      {/*<div className="flex-col flex pt-16">
       {topRestaurant && <Carousel newItem={topRestaurant} />}
  </div>*/}
      <div className="filter flex items-center justify-center my-8 gap-4">
        <div className="w-1/3">
          <input
            type="text"
            className="search-box block bg-white w-full border border-slate-300 rounded-full py-2 pl-2 shadow-sm sm:text-sm"
            value={searchText}
            placeholder="Search ..."
            onChange={(e) => {
              const filtersearchlist = listofRestaurants.filter(
                (item, index) => {
                  //return searchText.indexOf(item);
                  //console.log(item.info.cuisines);
                  return item.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
             // console.log(filtersearchlist);
             if(e.target.value === ''){
              setFilteredList(listofRestaurants);
             }
             else{
              setFilteredList(filtersearchlist);
             }
             setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <button
            className={`filter-btn ml-5 font-bold border border-slate-300 rounded-full py-2 px-3 ${isPureVegActive ? 'bg-gray-300' : 'bg-transparent'}`}
            onClick={(e) => {
              //console.log("button clicked");
              const filterlist = listofRestaurants.filter((restaurant) => {
               // console.log(restaurant);
               const { veg } = restaurant.info;
                return veg === true;
              });
              //console.log(filterlist);
              setFilteredList(filterlist);
              setPureVegIsActive(current => !current);
              setIsFastActive(false);
              setIsFastActive(false);
            }}
          >
            <i className="fa-solid fa-leaf" style={{color:"green"}}></i> Pure Veg
          </button>
        </div>
        <div className="text-center">
          <button
            className={`filter-btn ml-5 font-bold border border-slate-300 rounded-full py-2 px-3 ${isFastActive ? 'bg-gray-300' : 'bg-transparent'}`}
            onClick={() => {
              //console.log("button clicked");
              const filterlist = listofRestaurants.filter((restaurant) => {
               // console.log(restaurant);
               const {deliveryTime} = restaurant?.info?.sla;
                return deliveryTime < 25;
                
              });
              //console.log(filterlist);
              setFilteredList(filterlist);
              setIsFastActive(current => !current);
              setIsRatingActive(false);
              setPureVegIsActive(false);
            }}
          >
            <i className="fas fa-shipping-fast"></i> Fast Delivery
          </button>
        </div>
        <div className="">
          <button
            className={`filter-btn ml-5 font-bold border border-slate-300 rounded-full py-2 px-3 ${isRatingActive ? 'bg-gray-300' : 'bg-transparent'}`}
            onClick={() => {
              //console.log("button clicked");
              const filterlist = listofRestaurants.filter((restaurant) => {
                //console.log(restaurant);
                const { avgRating } = restaurant.info;
                return avgRating > 4.2;
              });
             // console.log(filterlist);
              setFilteredList(filterlist);
              setIsRatingActive(current => !current);
              setIsFastActive(false);
              setPureVegIsActive(false);
            }}
          >
            <i className="fa-solid fa-star" style={{color:"green"}}></i> Ratings 4.0+
          </button>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            className="w-[300px] p-2 mb-2 shadow-lg rounded-md"
          >
            {/*restaurant?.info?.avgRating > 4.4 ? (
              <RestaurantCardOnlyFiveStar resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )*/}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
