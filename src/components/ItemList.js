import { MENU_ITEM_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return items.map((item) => {
    //console.log(item);
    const singleitem = item?.card?.info;
    return (
      <div
        key={singleitem.id}
        className="flex flex-wrap justify-between mt-2 pb-5 mb-2 border-b-2"
      >
        <div className="text-bold w-4/6">
          <p>
            {singleitem.isVeg ? (
              <span className="w-7 h-7  border-green-800 border-2 relative inline-block">
                <span className="absolute text-sm bg-green-700 rounded-full inline-block inset-0 h-2 w-2 m-2">
                  .
                </span>
              </span>
            ) : (
              <span className="w-7 h-7  border-red-800 border-2 relative inline-block">
                <span className="absolute text-sm bg-red-700 rounded-full inline-block inset-0 h-2 w-2 m-2">
                  .
                </span>
              </span>
            )}
          </p>
          <p>{singleitem.name}</p>
          <p>{singleitem.description}</p>
          {singleitem.finalPrice ? (
            <p>
              ₹
              <span className="line-through text-gray-500 text-xs">
                {singleitem.price / 100}
              </span>
              <span className="pl-2">{singleitem.finalPrice / 100}</span>
            </p>
          ) : (
            <p>
              <span>₹{singleitem.price / 100}</span>
            </p>
          )}
        </div>
        <div className="">
          {singleitem.imageId && (
            <div className="absolute">
              <button className="px-5 py-2 rounded-r-lg mx-auto bg-black text-white shadow-lg m-auto">
                Add
              </button>
            </div>
          )}
          {singleitem.imageId && (
            <img
              src={MENU_ITEM_URL + singleitem.imageId}
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    );
  });
};

export default ItemList;
