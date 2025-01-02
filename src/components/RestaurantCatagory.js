import { useState } from "react";
import CatagoryItems from "./CatagoryItems";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const RestaurantCatagory = ({ data, showItems, setShowItems }) => {
  console.log(data);
  console.log(data?.itemCards);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //return setShowItems(!showItems);
    setShowItems();
  };
  return (
    <div className=" m-auto p-4 shadow-lg  w-6/12 border-b border-gray-300 rounded-lg">
      <div
        className="flex justify-between font-bold px-6 cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={handleClick}
      >
        <span>
          {/* {data.title}({data.itemCards.length || data.categories.length}) */}
          {data.title}({data.itemCards.length})
        </span>
        {showItems ? (
          <IoIosArrowDropup className="w-10 h-6 " />
        ) : (
          <IoIosArrowDropdown className="w-10 h-6" />
        )}
      </div>

      {showItems && <CatagoryItems items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCatagory;
