import React from "react";
import { Link } from "react-router-dom";
import BackgorundImage from "../assets/banneryeni.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BackgorundImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>Make Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
