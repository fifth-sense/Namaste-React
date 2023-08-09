
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestraurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/> ;
    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards, title}  = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (

        <div className="menu">
            <h1>{title}</h1>
            <h2>{name}</h2>
            <span> {cuisines.join(", ")} </span>
            <span> {costForTwoMessage} - {avgRating} </span>
            <ul>
                {itemCards?.map((item)=><li key={item?.card?.indo?.id}>{item?.card?.info.name}</li>)}
            </ul>
        </div>
    )

}
export default RestraurantMenu;