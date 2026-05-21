import React from "react";
import ReactDom from "react-dom/client";
import logo from 'url:./assets/logo.jpg'

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

const AppLayout = () => {
    return <div className="app">
        <Header />
    </div>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
