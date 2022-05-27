import React from "react";
import "./Home.css";

const homePic = new URL("../images/homeNote.png", import.meta.url);

export function Home() {
	return (
		<div class="container-xl">
			<br />
			<div className="home-div">
				<h1>
					Y-Nhu & Magnus' <br />
					Wedding
				</h1>
				<div class="container">
					<div class="row">
						<div class="col">
							<p>
								<img src={homePic} className="home-note-pic" />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								vel lorem consequat, bibendum ipsum quis, hendrerit lacus. Etiam
								turpis urna, varius et dignissim eget, feugiat ac magna. Orci
								varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Morbi justo nunc, tempus in massa sit
								amet, eleifend imperdiet nisl. Aenean libero ex, facilisis a
								ante quis, fermentum sagittis sapien. Ut pretium placerat
								hendrerit. Ut eu vulputate dolor. Quisque ullamcorper tincidunt
								nibh, non molestie erat elementum eu. Cras metus metus, interdum
								quis faucibus maximus, luctus semper metus. Nunc dapibus
								convallis posuere. Praesent condimentum sem sed porta dapibus.
								Maecenas consectetur dapibus mauris eget vulputate. Suspendisse
								felis nulla, molestie in tortor sit amet, porta cursus magna.
								Nulla tincidunt, eros sit amet tristique vestibulum, arcu lacus
								tristique leo, ut lacinia erat sem at ipsum. Vestibulum
								ullamcorper eros eget tortor tincidunt tincidunt. Fusce eu
								accumsan lacus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
