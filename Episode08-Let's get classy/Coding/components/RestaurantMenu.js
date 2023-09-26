import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SWIGGY_MENU_URL,
  RESTAURANT_TYPE_KEY,
  GRIDWIDGET_TYPE_KEY,
  MENU_ITEM_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [offers, setOffers] = useState([]); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]); // for recommended menus
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_URL + resId);
      const json = await data.json();
      // Set restaurant data
      console.log(json);
      const restaurantData =
        json?.data?.cards
          ?.map((x) => {
            return x.card;
          })
          ?.find((x) => x.card["@type"] === RESTAURANT_TYPE_KEY)?.card?.info ||
        null;

      // Set offers data
      const offersData =
        json?.data?.cards
          ?.map((x) => {
            return x.card;
          })
          ?.find((x) => x.card["@type"] === GRIDWIDGET_TYPE_KEY)?.card
          ?.gridElements?.infoWithStyle?.offers || [];

      // set recommended menu items
      const menuData =
        json?.data?.cards?.map((x) => x.groupedCard)?.find((x) => x)
          ?.cardGroupMap?.REGULAR?.cards || [];

      setRestaurant(restaurantData);
      setOffers(offersData);
      setMenuItems(menuData);
    } catch (err) {
      setRestaurant("");
      setOffers([]);
      setMenuItems([]);
      console.log(err);
    }
  };

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = restaurant ? restaurant : "No Data Found";

  //console.log(offers);
  let offersHTML;
  if (offers.length > 0) {
    offersHTML = offers.map((offer, ind) => {
      const {
        info: { couponCode, description, header },
      } = offer;
      //console.log(couponCode, description, header);
      return (
        <div className="offer" key={ind}>
          <h3>{header}</h3>
          <h5>
            {couponCode} | {description}{" "}
          </h5>
        </div>
      );
    });
  } else {
    offersHTML = "No Offers Available";
  }

  // menu items
  const cardItems = menuItems[2]?.card?.card?.itemCards;
  let menuHTML;
   //console.log(cardItems);
  if (cardItems && cardItems.length > 0) {
    menuHTML = cardItems.map((menu, ind) => {
    //  console.log(menu);
      const { card } = menu;
      const {
        info: { defaultPrice, description, name, imageId,price },
      } = card;
      return (
        <div className="menuItemCard" key={ind}>
          <div className="menuName">
            <h4 className="menuName">{name}</h4>
            <h5 className="menuPrice">
            <i className="fa fa-inr"></i> { defaultPrice/100 || price/100}
            </h5>
            <p className="menu-desc">{description}</p>
          </div>
          <div className="menuImage">
            {imageId && <img src={MENU_ITEM_URL + imageId} alt={name} />}
          </div>
        </div>
      );
    });
  } else {
    menuHTML = "No Menu Available";
  }

  return restaurant === null ? (
    <Shimmer />
  ) : (
    <div className="menuContainer">
      <div className="resDetails">
        <div className="resName">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="ratings">
          <span className="rateViews">{avgRating}</span>
          <span className="rateAvg">{totalRatingsString}</span>
        </div>
      </div>
      <hr />
      <div className="deliveryDetails">
        <span className="time">
          <i className="fa-solid fa-clock"></i> {sla.deliveryTime}
        </span>
        <span className="cost">
          <i className="fa fa-inr"></i> {costForTwoMessage}
        </span>
      </div>
      <div className="couponDetails">{offersHTML}</div>
      <div className="menuGrid">{menuHTML}</div>
    </div>
  );
};

export default RestaurantMenu;
