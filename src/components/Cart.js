import { useDispatch, useSelector } from "react-redux";
import CatagoryItems from "./CatagoryItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    return dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="border p-5 m-4 bg-slate-500 rounded-lg hover:bg-slate-700 text-white transition-transform"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto border">
        <CatagoryItems items={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="font-bold text-2xl text-red-600">
            No Items available in the Cart
          </h1>
        )}
      </div>
    </div>
  );
};
export default Cart;
