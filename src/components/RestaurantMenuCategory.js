import { MENU_ITEM_IMAGE_URL } from "../utils/constants";

function RestaurantCategory({ categoryInfo, isOpen, toggleCategory }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:shadow-xl">
      {/* CATEGORY HEADER */}

      <div
        onClick={toggleCategory}
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

        <div className="text-xl text-gray-500">{isOpen ? "▲" : "▼"}</div>
      </div>

      {/* MENU ITEMS */}

      {isOpen && (
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
}

export default RestaurantCategory;
