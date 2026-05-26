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
    <div className="mx-auto max-w-7xl">
      {/* FILTERS */}

      <div className="mb-10 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        {/* SEARCH */}

        <div className="flex flex-1 items-center gap-3">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
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

        {/* TOP RESTAURANTS */}

        <button
          className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-3 font-medium text-orange-600 transition hover:bg-orange-100"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );

            setRestaurants(filteredList);
          }}
        >
          ⭐ Top Restaurants
        </button>
      </div>

      {/* RESTAURANT LIST */}

      {!loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {restaurants.map((restaurant) => {
            if (restaurant.info.cloudinaryImageId.startsWith("RX"))
              return (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurant/" + restaurant.info.id}
                  className="transition hover:scale-[1.02]"
                >
                  <RestaurantCard restaurantInfo={restaurant.info} />
                </Link>
              );
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
}

export default RestaurantList;
