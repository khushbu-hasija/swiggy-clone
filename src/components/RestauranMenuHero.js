import { RESTAURANT_LIST_IMAGES_URL } from "../utils/constants";

const RestaurantMenuHeader = ({ restaurantInfo }) => {
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
  return (
    <>
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

        {/* DETAILS */}

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
    </>
  );
};

export default RestaurantMenuHeader;
