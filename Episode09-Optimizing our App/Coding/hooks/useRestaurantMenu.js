import { useEffect, useState } from "react";
import {
  SWIGGY_MENU_URL
} from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_URL + resId);
      const json = await data.json();
      //console.log("my test result");
      console.log(json);
      setResInfo(json);
      // Set restaurant data
    } catch (err) {
      setResInfo([]);
      console.log(err);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
