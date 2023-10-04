import { useParams } from "react-router-dom";
import {
  RESTAURANT_TYPE_KEY,
  GRIDWIDGET_TYPE_KEY,
  MENU_ITEM_URL,
} from "../utils/constants";
import {CardShimmer} from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  // Set restaurant data
  const restaurantData =
    restaurant?.data?.cards
      ?.map((x) => {
        return x.card;
      })
      ?.find((x) => x.card["@type"] === RESTAURANT_TYPE_KEY)?.card?.info ||
    null;
  //console.log(restaurantData);
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = restaurantData ? restaurantData : "No Data Found";

  // Set offers data
  const offersData =
    restaurant?.data?.cards
      ?.map((x) => {
        return x.card;
      })
      ?.find((x) => x.card["@type"] === GRIDWIDGET_TYPE_KEY)?.card?.gridElements
      ?.infoWithStyle?.offers || [];

  //console.log(offersData);

  let offersHTML;

  offersHTML = offersData.map((offer, ind) => {
    const {
      info: { couponCode, description, header,offerTagColor },
    } = offer;
    //console.log(couponCode, description, header);
    return (
      <div className="offer" key={ind}>
        <h4 style={{color:offerTagColor}}>{header}</h4>
        <h6>
          {couponCode} | {description}{" "}
        </h6>
      </div>
    );
  });

  // set recommended menu items
  const menuData =
    restaurant?.data?.cards?.map((x) => x.groupedCard)?.find((x) => x)
      ?.cardGroupMap?.REGULAR?.cards || [];
  //console.log(menuData);

  // menu items
  const cardItems = menuData[2]?.card?.card?.itemCards;
  let menuHTML;
  //console.log(cardItems);
  if (cardItems && cardItems.length > 0) {
    menuHTML = cardItems.map((menu, ind) => {
      //  console.log(menu);
      const { card } = menu;
      const {
        info: { defaultPrice, description, name, imageId, price },
      } = card;
      return (
        <div className="menuItemCard" key={ind}>
          <div className="menuName">
            <h4 className="menuName">{name}</h4>
            <h5 className="menuPrice">
              <i className="fa fa-inr"></i> {defaultPrice / 100 || price / 100}
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
    menuHTML = <CardShimmer />;
  }
  return restaurant === null ? (
    <CardShimmer />
  ) : (
    <div className="menuContainer">
      {restaurantData && (
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
      )}
      <hr />
      {restaurantData && (
        <div className="deliveryDetails">
          <span className="time">
            <i className="fa-solid fa-clock"></i> {sla.deliveryTime}
          </span>
          <span className="cost">
            <i className="fa fa-inr"></i> {costForTwoMessage}
          </span>
        </div>
      )}
      {offersData && <div className="couponDetails">{offersHTML}</div>}
      {menuData && <div className="menuGrid">{menuHTML}</div>}
    </div>
  );
};

export default RestaurantMenu;
