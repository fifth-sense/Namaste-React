import restList from "../utils/mockData";
import { logo } from "../../logo.png";
import { CDN_URL } from "../utils/constants";
const RestrauntContainer = (props) => {
  const {
    id,
    name,
    avgRatingString,
    costForTwo,
    cuisines,
    sla,
    cloudinaryImageId,
  } = props.foodList?.info;

  return (
    <div className="res-card" key={id}>
      <div className="res-img-conatiner">
        <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res_card_container">
        <span className="res-food-name">{name}</span>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div className="res-data">
          <div className="rating">{avgRatingString}*</div>
          <div>.</div>
          <div className="">{sla?.slaString}</div>
          <div>.</div>
          <div>{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};
export default RestrauntContainer;
