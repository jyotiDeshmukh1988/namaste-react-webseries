import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import ItemList from "./ItemList";
import { useRef } from "react";
const RestaurantCategory = ({ data, showItems,displayItems }) => {
  //console.log(data);
  const { title, itemCards } = data;
  const handleClick = () => {
    displayItems();
  };
  //console.log(itemCards);
  return (
    <div className="w-full mx-auto my-4 shadow-md bg-gray-50 p-3 flex justify-between flex-col">
      {/* header */}
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-lg font-bold">
          {title} ({itemCards.length})
        </h2>
        {showItems ? (
          <IoIosArrowDropup size={20} />
        ) : (
          <IoIosArrowDropdown size={20} />
        )}
        {/* Accordian body */}
      </div>
      {showItems && (
        <ItemList items={itemCards} key={itemCards?.card?.info?.id} />
      )}
    </div>
  );
};

export default RestaurantCategory;
