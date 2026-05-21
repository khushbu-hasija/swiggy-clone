import React from "react";
import ReactDom from "react-dom/client";
import logo from 'url:./assets/logo.jpg'
import img1 from 'url:./assets/cards/img1.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>              
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
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

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> 
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body/>
    </div>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
