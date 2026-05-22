import { RESTAURANT_LIST_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setRestaurants(restaurantData || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="filter">
        <button
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
      <div className="res-container">
        {restaurants.map((restaurant) => {
          if (restaurant.info.cloudinaryImageId.startsWith("RX"))
            return (
              <RestaurantCard
                key={restaurant.info.id}
                restaurantInfo={restaurant.info}
              />
            );
        })}
      </div>
    </>
  );
}

export default RestaurantList;
