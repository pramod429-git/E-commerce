import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestuarantsMenu from "../utils/useRestaurantsMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCatagory from "./RestaurantCatagory";
import { IoMdStar } from "react-icons/io";
import { ImOffice } from "react-icons/im";
import { useState } from "react";
import { FaHotel } from "react-icons/fa6";
const RestaurantsMenu = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  console.log({ restId: restId });

  //const [resInfo, setResInfo] = useState(null);

  const resInfo = useRestuarantsMenu(restId);

  console.log(resInfo);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Connection Error</h1>
        <h3>Please check your internet Connection</h3>
      </div>
    );
  }

  if (!resInfo) {
    return <Shimmer />;
  }

  console.log(resInfo);
  const {
    name,
    cuisines,
    costForTwoMessage,
    sla: { slaString },
    totalRatingsString,
    areaName,
    avgRating,
  } = resInfo?.cards ? resInfo?.cards[2]?.card?.card?.info : {};
  console.log(totalRatingsString);

  const { itemCards = [] } = resInfo?.cards
    ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    : {};
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (catagory) =>
        // catagory?.card?.card?.["@type"]?
        //   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory":
        // "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        catagory?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(catagories);
  //console.log(itemCards);

  //const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};

  // const { card: { card: { info: { name } = {} } = {} } = {} } =
  //   resInfo?.cards[2];

  //const name = resInfo?.cards[2]?.card?.card?.info.name;
  //console.log(name);

  //const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;

  //console.log(name);

  //console.log(cuisines);
  console.log(catagories);
  return (
    <div className="menu">
      <div className="resInfoHeading">
        <div className="font-bold w-6/12 m-auto p-4  text-2xl flex">
          <FaHotel className="w-10 text-green-500" />
          {name}
        </div>
        <div className="shadow-2xl rounded-2xl p-9 w-6/12 m-auto border border-black-500 ">
          <p className="font-bold flex">
            <span className="py-1 p-1 pl-0">
              <IoMdStar />
            </span>
            {avgRating}({totalRatingsString}) . {costForTwoMessage}
          </p>
          <p className="text-orange-500 font-bold">{cuisines.join(" ,")} </p>
          <p>
            <strong className="pr-5">Outlet </strong>
            <span className="font-bold text-gray-500">{areaName}</span>
          </p>
          <h4 className="font-bold">🕒 {slaString} </h4>
        </div>
      </div>

      {catagories.map((catagory, index) => (
        <div key={catagory?.card?.card?.title}>
          <RestaurantCatagory
            data={catagory?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        </div>
      ))}
    </div>
  );
};
export default RestaurantsMenu;
