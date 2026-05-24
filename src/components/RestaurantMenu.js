import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resMenu, setResMenu] = useState([]);
  const [openCategories, setOpenCategories] = useState({});

  const { resId } = useParams();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU_URL + resId);

      const json = await response.json();

      const menuData = json.data.cards || [];

      setResMenu(menuData);

      // Open all categories initially
      const categories =
        menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (category) =>
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        ) || [];

      const initialOpenState = {};

      categories.forEach((_, index) => {
        initialOpenState[index] = true;
      });

      setOpenCategories(initialOpenState);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (resMenu.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenu[2]?.card?.card?.info || {};

  const categories =
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
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

      <p>
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      {categories.map((category, index) => {
        const categoryInfo = category?.card?.card;

        return (
          <div
            key={categoryInfo?.title}
            className="menu-category"
            style={{
              marginTop: "24px",
            }}
          >
            <div
              className="category-header"
              onClick={() => toggleCategory(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                background: "#f5f5f5",
                padding: "12px 16px",
                borderRadius: "8px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                }}
              >
                {categoryInfo?.title} ({categoryInfo?.itemCards?.length})
              </h2>

              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {openCategories[index] ? "▲" : "▼"}
              </span>
            </div>

            {openCategories[index] && (
              <div className="category-items">
                {categoryInfo?.itemCards?.map((item) => {
                  const info = item?.card?.info;

                  return (
                    <div
                      key={info?.id}
                      className="menu-item"
                      style={{
                        borderBottom: "1px solid #e0e0e0",
                        padding: "16px 8px",
                      }}
                    >
                      <h3>{info?.name}</h3>

                      <p>₹{(info?.price || info?.defaultPrice) / 100}</p>

                      <p>{info?.description}</p>
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
