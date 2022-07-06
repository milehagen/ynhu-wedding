import React from "react";
import "./Home.css";
import weddingCard from "./../images/home-card.png";

export function Home() {
	return (
		<div className="background-rustic">
			<div class="container-fluid-home">
				<div className="info-card-div">
					<div class="row">
						<div class="col-12">
							<img src={weddingCard} alt="card" className="wedding-card" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
