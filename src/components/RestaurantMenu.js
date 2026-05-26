import { useState } from "react";
import {
  ITEM_CATEGORY,
  RESTAURANT_LIST_IMAGES_URL,
  MENU_ITEM_IMAGE_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const [openCategories, setOpenCategories] = useState({});

  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length === 0) {
    return <Shimmer />;
  }

  /* RESTAURANT INFO */

  const restaurantInfo = resMenu[2]?.card?.card?.info;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    locality,
    areaName,
    sla,
    cloudinaryImageId,
  } = restaurantInfo || {};

  /* MENU CATEGORIES */

  const categories =
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => category?.card?.card?.["@type"] === ITEM_CATEGORY,
    ) || [];

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* RESTAURANT HERO */}

      <div className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-4xl bg-white shadow-sm">
        {/* HERO IMAGE */}

        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={RESTAURANT_LIST_IMAGES_URL + cloudinaryImageId}
            alt={name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl font-black text-white md:text-5xl">
              {name}
            </h1>

            <p className="mt-2 text-sm text-gray-200">
              {locality}, {areaName}
            </p>
          </div>
        </div>

        {/* RESTAURANT DETAILS */}

        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-gray-500">{cuisines?.join(" • ")}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                {costForTwoMessage}
              </div>

              <div className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                🚚 {sla?.slaString}
              </div>

              <div className="rounded-2xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                📍 {sla?.lastMileTravelString}
              </div>
            </div>
          </div>

          {/* RATING */}

          <div className="rounded-3xl bg-green-100 px-6 py-4 text-center">
            <div className="text-2xl font-black text-green-700">
              ⭐ {avgRatingString}
            </div>

            <div className="mt-1 text-sm text-green-600">
              {totalRatingsString}
            </div>
          </div>
        </div>
      </div>

      {/* MENU */}

      <div className="mx-auto max-w-5xl space-y-6">
        {categories.map((category, index) => {
          const categoryInfo = category?.card?.card;

          return (
            <div
              key={categoryInfo?.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:shadow-xl"
            >
              {/* CATEGORY HEADER */}

              <div
                onClick={() => toggleCategory(index)}
                className="flex cursor-pointer items-center justify-between px-6 py-5 transition hover:bg-orange-50"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {categoryInfo?.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {categoryInfo?.itemCards?.length} items
                  </p>
                </div>

                <div className="text-xl text-gray-500">
                  {openCategories[index] ? "▲" : "▼"}
                </div>
              </div>

              {/* MENU ITEMS */}

              {openCategories[index] && (
                <div className="divide-y divide-gray-100">
                  {categoryInfo?.itemCards?.map((item) => {
                    const info = item?.card?.info;

                    return (
                      <div
                        key={info?.id}
                        className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between"
                      >
                        {/* ITEM DETAILS */}

                        <div className="flex-1">
                          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
                            {info?.category}
                          </p>

                          <h3 className="text-2xl font-bold text-gray-800">
                            {info?.name}
                          </h3>

                          <p className="mt-3 text-xl font-black text-green-700">
                            ₹{(info?.price || info?.defaultPrice) / 100}
                          </p>

                          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                            {info?.description}
                          </p>
                        </div>

                        {/* ITEM IMAGE */}

                        {info?.imageId && (
                          <div className="overflow-hidden rounded-3xl">
                            <img
                              src={MENU_ITEM_IMAGE_URL + info?.imageId}
                              alt={info?.name}
                              className="h-44 w-full object-cover transition duration-500 hover:scale-105 md:w-56"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
