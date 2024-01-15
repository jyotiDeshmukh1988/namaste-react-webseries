import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearItem } from "../utils/cartSlice";
import CartItemList from "./CartItemList";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div className="container pt-24 mx-auto w-8/12 p-4">
      <h1 className="font-bold text-2xl text-center">Cart</h1>

      {cartItems.length > 0 ? (
        <CartItemList items={cartItems} />
      ) : (
        <EmptyCart />
      )}
      {cartItems.length > 0 && (
        <button
          className="border-0 bg-black text-white rounded-lg px-3 py-1 mb-4 mt-3"
          onClick={() => dispatch(clearItem())}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

export const EmptyCart = () => {
  return (
    <div className="text-center">
      <img
        className="mx-auto"
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png"
        width="300"
      />
      <h3 className="my-2 text-2xl">Your cart is empty</h3>
      <h6 className="my-2 text-sm mt-3">
        Look like you haven't added anything to your cart yet.
      </h6>
      <Link to="/">
        <button className="bg-pink-800 text-white border-0 rounded-lg px-5 py-2 mt-5">
          Shop Now
        </button>
      </Link>
    </div>
  );
};
