import img1 from "url:../../assets/cards/img1.png";
import { useState, useEffect } from "react";
function RestaurantCard() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants",
      );
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
        return (
          <div className="res-card" key={restaurant.info.id}>
            <img
              className="res-image"
              alt="res-image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurant.info.cloudinaryImageId
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

export default RestaurantCard;
