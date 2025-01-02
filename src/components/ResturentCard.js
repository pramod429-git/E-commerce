import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
const ResturentCard = ({ resData }) => {
  const { LoggedInUser } = useContext(userContext);
  console.log(LoggedInUser);
  // const {resName,cuisines,rating,dTime}=props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    // sla: { slaString },
    sla,
    cloudinaryImageId,
  } = resData.info;
  //console.log(resData);
  return (
    <div
      className="res-card w-[200px] h-[415px] p-2 m-4 rounded-lg hover:shadow-lg bg-slate-100 hover:bg-slate-200 hover:scale-105 transition-transform duration-200 ease-in-out"

      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="res-logo w-[200px] h-[150px] rounded-lg border border-black"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-bold py-2">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      {/* <h3>{slaString}</h3> */}
      <h3>{sla?.slaString}</h3>
      {/* <h3>user Name:{LoggedInUser} </h3> */}
    </div>
  );
};

export const WithOpenRestuarentLable = (ResturentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-400 text-white m-2 p-2">
          GET COOl OFFERS!!
        </label>
        <ResturentCard {...props} />
      </div>
    );
  };
};
export default ResturentCard;
