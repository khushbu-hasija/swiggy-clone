import { useState } from "react";
import { ITEM_CATEGORY } from "../utils/constants";
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

  const { name, cuisines, costForTwoMessage } =
    resMenu[2]?.card?.card?.info || {};

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
    <div className="restaurant-menu">
      <h1>{name}</h1>

      <p className="restaurant-subtitle">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      {categories.map((category, index) => {
        const categoryInfo = category?.card?.card;

        return (
          <div key={categoryInfo?.title} className="menu-category">
            <div
              className="category-header"
              onClick={() => toggleCategory(index)}
            >
              <h2 className="category-title">
                {categoryInfo?.title} ({categoryInfo?.itemCards?.length})
              </h2>

              <span className="collapse-icon">
                {openCategories[index] ? "▲" : "▼"}
              </span>
            </div>

            {openCategories[index] && (
              <div className="category-items">
                {categoryInfo?.itemCards?.map((item) => {
                  const info = item?.card?.info;

                  return (
                    <div key={info?.id} className="menu-item">
                      <h3>{info?.name}</h3>

                      <p className="item-price">
                        ₹{(info?.price || info?.defaultPrice) / 100}
                      </p>

                      <p className="item-description">{info?.description}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
