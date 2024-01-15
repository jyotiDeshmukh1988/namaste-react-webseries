import { useParams } from "react-router-dom";
import {
  RESTAURANT_TYPE_KEY,
  GRIDWIDGET_TYPE_KEY,
  MENU_ITEM_URL,
  CATEGORY_TYPE_KEY,
} from "../utils/constants";
import { CardShimmer } from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const handleClick = (myindex) => {
  //  console.log(myindex);
   // console.log(showIndex);
    setShowIndex(showIndex == myindex ? null : myindex);
  }
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
    id,
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
      info: { couponCode, description, header, offerTagColor },
    } = offer;
    //console.log(couponCode, description, header);
    return (
      <div className="offer py-2 px-5 rounded-md border-2" key={ind}>
        <h4 style={{ color: offerTagColor }} className="text-center">
          {header}
        </h4>
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

  const categories = menuData
    .map((x) => x.card.card)
    ?.filter((x) => x["@type"] === CATEGORY_TYPE_KEY);
  // console.log(categories);

  return restaurant === 0 ? (
    <CardShimmer />
  ) : (
    <div className="menuContainer pt-16">
      {restaurantData && (
        <div className="resDetails flex justify-between mb-5 mt-7">
          <div className="resName">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{cuisines.join(", ")}</p>
          </div>
          <div className="ratings flex flex-col items-center rounded-sm">
            <span className="rateViews">{avgRating}</span>
            <span className="rateAvg">{totalRatingsString}</span>
          </div>
        </div>
      )}
      <hr />
      {restaurantData && (
        <div className="deliveryDetails flex gap-5 mt-5 mb-2">
          <span className="time font-semibold text-base">
            <i className="fa-solid fa-clock"></i> {sla.deliveryTime}
          </span>
          <span className="cost font-semibold text-base">
            {costForTwoMessage}
          </span>
        </div>
      )}
      {offersData && (
        <div className="couponDetails flex justify-between mt-5 mb-5">
          {offersHTML}
        </div>
      )}
      {/*menuData && <div className="menuGrid">{menuHTML}</div>*/}
      {/* categories accordian */}
      {categories.map((category, index) => {
        //console.log(category);
        return (
          // controlled component becoz its state is controlled by its parent that is Restaurant menu
          <RestaurantCategory
            data={category}
            key={category.title}
            showItems={
              index == showIndex ? true : false
            }
            displayItems={()=>handleClick(index)}
            //setShowIndex={()=>setShowIndex(showIndex === index ? null : index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
