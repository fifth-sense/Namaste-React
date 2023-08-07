import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestraurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
       
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data);
    }
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