import { CDN_URL } from "../utils/constants"; // importing the named export file

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info; // its a optional chaining
  return (
    <div className="res-card">
      <div className="menu-image">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <div className="res-details">
        <h3>{name}</h3>
        <span><i className="fa-solid fa-star"></i> {avgRating} stars</span>
        <p>{cuisines.join(", ")}</p>
        {/*<h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>*/}
      </div>
    </div>
  );
};

export default RestaurantCard;
