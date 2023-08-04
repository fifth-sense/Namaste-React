import { useEffect, useState } from "react";
import RestrauntContainer from "./RestrauntContainer";
import { FOOD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunts, setLisOfRestraunts] = useState([]);
  const [listOfFilteredRestraunts, setListOfFilteredRestraunt ] = useState([])
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(FOOD_URL);
    const json = await data.json();
    console.log("json===", json)
    const restraurantList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setLisOfRestraunts(restraurantList);
    setListOfFilteredRestraunt(restraurantList)

  };

  const handleOnClick = () => {
    let result = listOfRestraunts.filter((e) => e?.info?.avgRatingString > 4);
    setLisOfRestraunts(result);
  };

  const handleSearch = () => {
    if(searchText !==""){
        let filterRestraunt = listOfRestraunts?.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setListOfFilteredRestraunt(filterRestraunt);

    }else{setListOfFilteredRestraunt(listOfRestraunts)}
   
  };

  return listOfRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button className="top-res" onClick={handleOnClick}>
          Top Rated Restraunt*
        </button>
      </div>

      <div className="res-container">
        {listOfFilteredRestraunts.map((food) => (
          <RestrauntContainer key={food?.info?.id} foodList={food} />
        ))}
      </div>
    </div>
  );
};

export default Body;
