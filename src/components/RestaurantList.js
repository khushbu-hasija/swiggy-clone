import {
  RESTAURANT_LIST_IMAGES_URL,
  RESTAURANT_LIST_URL,
} from "../utils/constants";
import { useState, useEffect } from "react";

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

  console.log(restaurants);

  return (
    <div className="res-container">
      {restaurants.map((restaurant) => {
        if (restaurant.info.cloudinaryImageId.startsWith("RX"))
          return (
            <div className="res-card" key={restaurant.info.id}>
              <img
                className="res-image"
                alt="res-image"
                src={
                  RESTAURANT_LIST_IMAGES_URL + restaurant.info.cloudinaryImageId
                }
              />
              <h3>{restaurant.info.name}</h3>
              <p>{restaurant.info.cuisines.join(", ")}</p>
              <p>Rating: {restaurant.info.avgRatingString}</p>
            </div>
          );
      })}
    </div>
  );
}

export default RestaurantList;
