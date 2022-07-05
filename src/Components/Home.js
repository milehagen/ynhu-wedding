import React from "react";
import "./Home.css";
import img from "./../images/home-card.png";

export function Home() {
	return (
		<div className="background-rustic">
			<div class="container-fluid-home">
				<div className="info-card-div">
					<img src={img} alt="card" className="wedding-card" />
				</div>
			</div>
		</div>
	);
}
