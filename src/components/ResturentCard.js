import { CDN_URL } from "../utils/constants";
const ResturentCard = ({ resData }) => {
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
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      {/* <h3>{slaString}</h3> */}
      <h3>{sla?.slaString}</h3>
    </div>
  );
};
export default ResturentCard;
