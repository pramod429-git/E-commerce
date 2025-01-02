//import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CatagoryItems = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItems = (item) => dispatch(addItem(item));

  const handleRemoveItem = () => dispatch(removeItem());

  return (
    <div className="transition-transform duration-300">
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b border-gray-400 my-7">
          <div className="px-6">
            <span className="font-bold text-lg text-gray-600">
              {item.card.info.name}
            </span>
            <p className="font-bold">
              {" "}
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
          </div>

          <div className="px-6 pb-10 flex  ">
            <p className="text-gray-500 py-10 w-9/12">
              {item.card.info.description}
            </p>
            <div className="w-3/12 p-4">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="rounded-lg  my-2 shadow-lg"
                alt="no image"
              />
              <div className=" mx-6 my-15 flex ml-0 ">
                <button
                  className="bg-gray-500 text-white rounded-lg px-6 py-2
                 font-bold shadow-lg hover:bg-slate-400 transition m-3 "
                  onClick={() => handleAddItems(item)}
                >
                  +
                </button>
                <button
                  className="bg-gray-500 text-white rounded-lg px-6 py-2
                 font-bold shadow-lg hover:bg-slate-400 transitionn m-3"
                  onClick={handleRemoveItem}
                >
                  -
                </button>
              </div>
              <p className="text-gray-400 px-2 ml-6">customize</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CatagoryItems;
