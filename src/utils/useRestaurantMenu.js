import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU_URL + resId);
      const json = await response.json();
      const menuData = json.data.cards || [];
      setResMenu(menuData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
