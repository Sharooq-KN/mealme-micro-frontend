import React from "react";
import ReactDOM from "react-dom";
import MainHeader from "main_page/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Sidebar from "main_page/Sidebar";
import MainPageContent from "./MainPageContent";
import KitchenContent from "kitchen_page/KitchenContent";

const App = () => (
  <div className="container">
    <MainHeader/>
    <MainPageContent/>
    <Sidebar/>
    <KitchenContent/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
