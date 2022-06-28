import React from "react";
import "./Seating.css";

const seating = new URL("../images/seatingPic.png", import.meta.url);

export function Seating() {
	return (
		<div class="container-xxl">
			<br />
			<div className="home-div">
				<div class="container-lg">
					<div class="row">
						<div class="col-12">
							<h2 className="find-your-seat-heading">Find Your Seat</h2>
						</div>
						<div class="col-4">
							<h5 className="table-number-heading">Table 1</h5>
							<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique dolor. Proin fermentum, nisl non mattis fringilla, nibh mi mattis metus, gravida molestie justo quam eget tellus. Maecenas consequat efficitur diam. Sed vitae sem in tellus viverra rutrum non id dolor. Nam luctus, metus vulputate lobortis laoreet, felis nibh tempor tortor, eget eleifend turpis lacus ut urna. Phasellus iaculis, purus non dignissim aliquet, orci risus elementum sem, vitae sollicitudin est metus et tortor. Maecenas lobortis dolor egestas, pretium purus in, molestie diam. Sed blandit dui orci, ut interdum leo suscipit vel. Aenean ac pulvinar eros. Phasellus id leo sit amet metus accumsan aliquam. Pellentesque convallis vel lectus vel sodales. Nam pellentesque eros at consequat placerat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
