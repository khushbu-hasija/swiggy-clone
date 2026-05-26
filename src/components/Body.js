import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantList from "./RestaurantList";
import Offline from "./Offline";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <Offline />;
  }

  return (
    <div className="body">
      <RestaurantList />
    </div>
  );
};

export default Body;
