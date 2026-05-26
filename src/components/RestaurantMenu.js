import { useState } from "react";
import { ITEM_CATEGORY } from "../utils/constants";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuHero from "./RestauranMenuHero";

function RestaurantMenu() {
  const [openCategories, setOpenCategories] = useState({ 0: true });

  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length === 0) {
    return <Shimmer />;
  }

  /* RESTAURANT INFO */

  const restaurantInfo = resMenu[2]?.card?.card?.info;

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

      <RestaurantMenuHero restaurantInfo={restaurantInfo} />

      {/* MENU */}

      <div className="mx-auto max-w-5xl space-y-6">
        {categories.map((category, index) => {
          const categoryInfo = category?.card?.card;

          return (
            <RestaurantMenuCategory
              key={categoryInfo?.title}
              categoryInfo={categoryInfo}
              isOpen={openCategories[index]}
              toggleCategory={() => toggleCategory(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
