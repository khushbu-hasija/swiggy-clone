import ReactDom from "react-dom/client";
import img1 from 'url:../assets/cards/img1.png'
import Header from "./components/Header"
import Body from "./components/Body"

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-image" alt="res-logo" src={img1} />
            <h3 className="card-title">Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4> 4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
