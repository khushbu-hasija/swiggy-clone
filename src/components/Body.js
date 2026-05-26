import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantList from "./RestaurantList";
import Offline from "./Offline";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <Offline />;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6">
      <RestaurantList />
    </main>
  );
};

export default Body;
