import { RESTAURANT_LIST_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST_URL);
      const json = await response.json();
      const restaurantData =
        json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setAllRestaurants(restaurantData || []);
      setRestaurants(restaurantData || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const searchedList = allrestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setRestaurants(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-res-button"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setRestaurants(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      {!loading ? (
        <div className="res-container">
          {restaurants.map((restaurant) => {
            if (restaurant.info.cloudinaryImageId.startsWith("RX"))
              return (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurant/" + restaurant.info.id}
                >
                  <RestaurantCard restaurantInfo={restaurant.info} />
                </Link>
              );
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
}

export default RestaurantList;
