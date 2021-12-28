import React from "react";
import ReactDOM from "react-dom";
import MainHeader from "main_page/Header";
import Sidebar from "main_page/Sidebar";
import "./index.css";
import KitchenContent from "kitchen_page/KitchenContent";

const App = () => (
  <div className="container">
    <MainHeader/>
    <Sidebar/>
    <KitchenContent/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
