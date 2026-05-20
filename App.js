import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("h1", {}, "Hellow")
])

console.log(parent)

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent)
