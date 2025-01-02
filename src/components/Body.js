import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import ResturentCard, { WithOpenRestuarentLable } from "./ResturentCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BsSearch } from "react-icons/bs";
import { IoIosRestaurant } from "react-icons/io";
import userContext from "../utils/userContext";

const Body = () => {
  const [lisOfTopRatedRes, setLisOfTopRatedRes] = useState([]);
  const [filterdResturent, setFilterdResturent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const OpenRestuarent = WithOpenRestuarentLable(ResturentCard);

  console.log("body rendering");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91870&lng=74.85980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const cardsArray =
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants ||
      [];

    // Append new data to the existing list
    setLisOfTopRatedRes(cardsArray);
    setFilterdResturent(cardsArray);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Connection Error</h1>
        <h3>Please check your internet Connection</h3>
      </div>
    );
  }

  if (lisOfTopRatedRes.length === 0) {
    return <Shimmer />;
  }
  const { setUserName, LoggedInUser } = useContext(userContext);
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search ml-8 m-10 ">
          <input
            placeholder="Search for food...?"
            className="w-full sm:w-80 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            //className="search-box border border-solid border-black p-2 w-56 rounded-lg placeholder-gray-400 focus:outline-none focus:ring"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            // className="search-btn ml-8 bg-amber-300 p-2 rounded-lg hover:shadow-lg  hover:text-red-600 hover:border border-solid border-black px-4 py-2"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ml-8"
            onClick={() => {
              const filteredSearch = lisOfTopRatedRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdResturent(filteredSearch);
            }}
          >
            <div className="flex items-center">
              <BsSearch />
              <span className="px-4">Search</span>
            </div>
          </button>
        </div>

        <button
          className="filter-btn ml-20 my-10 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out flex items-center"
          onClick={() => {
            const filter = lisOfTopRatedRes.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilterdResturent(filter);
          }}
        >
          <IoIosRestaurant className="w-10 h-6" />
          <span className="w-48">Top Rated Restaurants</span>
        </button>
        <div className="search ml-5 m-10 ">
          <label className="m-2 font-bold">User Name : </label>
          <input
            className="w-full sm:w-80 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              value = { LoggedInUser };
              return setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filterdResturent.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* restaurant is open display open logo in card */}
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <OpenRestuarent resData={restaurant} />
            ) : (
              <ResturentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
