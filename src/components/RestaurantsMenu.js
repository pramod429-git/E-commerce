import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestuarantsMenu from "../utils/useRestaurantsMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurantsMenu = () => {
  const { restId } = useParams();

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
  //console.log(itemCards);

  //const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};

  // const { card: { card: { info: { name } = {} } = {} } = {} } =
  //   resInfo?.cards[2];

  //const name = resInfo?.cards[2]?.card?.card?.info.name;
  console.log(name);

  //const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;

  //console.log(name);

  //console.log(cuisines);

  return (
    <div className="menu">
      <div className="resInfoHeading">
        {" "}
        <h1>{name}</h1>
        <h3>
          {avgRating}({totalRatingsString}) . {costForTwoMessage}
        </h3>
        <p>{cuisines.join(" ,")} </p>
        <p>
          <strong>Outlet </strong>
          {areaName}
        </p>
        <h4>{slaString} </h4>
      </div>

      <h2>Menu</h2>
      <div className="resMenu">
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                <h3>
                  <strong>{item?.card?.info?.name}</strong>
                </h3>
                <strong>
                  {" Rs."}
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </strong>
                <br />
                <strong>
                  {" "}
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </strong>
                (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 ||
                  0}
                )<br />
                {item?.card?.info?.description}
                {CDN_URL + item?.card?.info?.imageId}
                <hr />
              </li>
            );
            //console.log(item);
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantsMenu;
