import React from "react";
import "./Seating.css";

const seating = new URL("../images/seatingPic.png", import.meta.url);

export function Seating() {
	return (
		<div class="container-xl">
			<br />
			<div className="home-div">
				<div class="container">
					<div class="row">
						<div class="col">
							<img src={seating} className="home-note-pic" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
