import offline from "url:../../assets/offline.png";

const Offline = () => {
  return (
    <div className="offline-container">
      <img src={offline} />
      <h1>You’re Offline</h1>

      <p>
        Looks like your internet connection is disconnected. Please check your
        network and try again.
      </p>
    </div>
  );
};

export default Offline;
