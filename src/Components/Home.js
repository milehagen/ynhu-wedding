import React from "react";
import "./Home.css";
import img from "./../images/home-card.png";

export function Home() {
  return (
    <div class="container-fluid">
      <div className="info-card-div">
        <img src={img} alt="card" className="wedding-card" />
      </div>
    </div>
  );
}
