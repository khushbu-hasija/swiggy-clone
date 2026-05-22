import { RESTAURANT_LIST_IMAGES_URL } from "../utils/constants";

function RestaurantCard({ restaurantInfo }) {
  return (
    <>
      <div className="res-card" key={restaurantInfo.id}>
        <img
          className="res-image"
          alt="res-image"
          src={RESTAURANT_LIST_IMAGES_URL + restaurantInfo.cloudinaryImageId}
        />
        <h3>{restaurantInfo.name}</h3>
        <p>{restaurantInfo?.cuisines?.join(", ")}</p>
        <p>Rating: {restaurantInfo.avgRatingString}</p>
      </div>
    </>
  );
}

export default RestaurantCard;
