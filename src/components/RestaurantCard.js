import { RESTAURANT_LIST_IMAGES_URL } from "../utils/constants";

function RestaurantCard({ restaurantInfo }) {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwo,
    locality,
    veg,
    aggregatedDiscountInfoV3,
  } = restaurantInfo;

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* IMAGE SECTION */}

      <div className="relative overflow-hidden">
        <img
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
          alt={name}
          src={RESTAURANT_LIST_IMAGES_URL + cloudinaryImageId}
        />

        {/* DISCOUNT BADGE */}

        {aggregatedDiscountInfoV3 && (
          <div className="absolute bottom-3 left-3 rounded-xl bg-black/75 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            {aggregatedDiscountInfoV3.header}

            <span className="ml-1 text-xs font-medium text-orange-200">
              {aggregatedDiscountInfoV3.subHeader}
            </span>
          </div>
        )}

        {/* VEG/NON VEG */}

        <div className="absolute right-3 top-3">
          <div
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md ${
              veg ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {veg ? "VEG" : "NON-VEG"}
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div className="space-y-4 p-5">
        {/* TITLE + RATING */}

        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="line-clamp-1 text-xl font-bold text-gray-800">
              {name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">{locality}</p>
          </div>

          <div className="flex items-center gap-1 rounded-xl bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
            ⭐ {avgRatingString}
          </div>
        </div>

        {/* CUISINES */}

        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {cuisines?.join(", ")}
        </p>

        {/* FOOTER */}

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">
              {sla?.slaString}
            </p>

            <p className="text-xs text-gray-400">
              {sla?.lastMileTravel} km away
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">{costForTwo}</p>

            <p className="text-xs text-gray-400">{totalRatingsString}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
