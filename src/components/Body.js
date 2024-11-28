import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResturentCard from "./ResturentCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [lisOfTopRatedRes, setLisOfTopRatedRes] = useState([]);
  const [filterdResturent, setFilterdResturent] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  if (lisOfTopRatedRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredSearch = lisOfTopRatedRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdResturent(filteredSearch);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filter = lisOfTopRatedRes.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilterdResturent(filter);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterdResturent.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <ResturentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
