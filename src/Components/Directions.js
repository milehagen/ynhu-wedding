import React from "react";
import ruter from "./../images/rutetider.jpeg";

export function Directions() {
	return (
		<div className="directions">
			<br />
			<br />
			<br />

			<div class="container">
				<h2>NB!</h2>
				<p className="red">
					We have been informed by a few wedding guests that the information on
					Google maps is
					<strong> not </strong> updated, as it says that the "Filtvet" pier is
					closed. This is incorrect.
				</p>
				<p className="red">
					The <strong>boat departs from Aker brygge at 15:00 </strong>as normal.
					And, a bus is arranged to depart at Villa Malla at{" "}
					<strong>exactly 02:00 AM</strong>, and will arrive Oslo central
					station at aproximately 02:40AM.
				</p>
				<h2>
					Ved spørsmål kan Villa Malla kontaktes{" "}
					<a href="https://villamalla.no/kontakt"> her</a>{" "}
				</h2>
				<div class="content">
					<div class="row">
						<div class="col text">
							<div className="p-content">
								<p>
									Parkering på Villa Malla Det er en stor parkeringsplass til
									venstre for butikken Joker i Filtvet sentrum som kan benyttes.
									Det finnes også en kommunal parkeringsplass på helsetunet før
									du svinger ned til Villa Malla, i tillegg er det flere
									parkeringsplasser på Filtvets gamle dampskipsbrygge som ligger
									ca 100 meter forbi nedkjørsel til Villa Malla. PS: ikke parker
									bilen i selve Nordstrandsveien, dette kan resultere med bot.
								</p>
								<p>
									Veibeskrivelse fra Oslo/Asker Ta av fra E18 ved Asker. Kjør
									mot Heggedal, og følg skiltene mot Røyken. Følg deretter E134
									mot Drøbak. Etter å ha kjørt gjennom 1 lang og 2 korte
									tunneler, så kommer man til en rundkjøring hvor man kan se
									innslaget til Oslofjordtunnelen. Sving til høyre i denne
									rundkjøringen, og følg riksvei 281 i retning Storsand og
									Filtvet. Herfra tar det cirka 10-15 minutter å kjøre til
									Filtvet langs Oslofjorden. Ved skiltet Filtvet er det cirka
									200 meter igjen. Følg skiltene til Filtvet brygge, og du
									finner oss nede i svingen, rett ved Filtvet fyr.
								</p>
								<p>
									Fra Sørlandet og Drammen Følg E18 til Drammen. Ta deretter
									E134 mot Drøbak. Etter å ha kjørt gjennom 1 lang og 2 korte
									tunneler, så kommer man til en rundkjøring hvor man kan se
									innslaget til Oslofjordtunnelen. Sving til høyre i denne
									rundkjøringen, og følg riksvei 281 i retning Storsand og
									Filtvet. Herfra tar det cirka 10-15 minutter å kjøre til
									Filtvet langs Oslofjorden. Ved skiltet Filtvet er det cirka
									200 meter igjen. Følg skiltene til Filtvet brygge, og du
									finner oss nede i svingen, rett ved Filtvet fyr.
								</p>
							</div>
						</div>
						<div class="col">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020.7150801744099!2d10.614968316017018!3d59.57115369865162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46414f14dfe8efdd%3A0xeaebb6b5f371e00f!2sVilla%20Malla!5e0!3m2!1sen!2sno!4v1656670870429!5m2!1sen!2sno"
								width="600"
								height="450"
								allowfullscreen=""
								alt-text="google-map"
								title="villa-malla-map"
							></iframe>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p>
							Fra Drøbak og Østfold Kjør gjennom Oslofjordtunnelen, og ta til
							venstre i første rundkjøring etter tunnelen. Følg deretter riksvei
							281 i retning Storsand og Filtvet. Fra rundkjøringen tar det cirka
							10-15 minutter å kjøre til Filtvet langs Oslofjorden. Ved skiltet
							Filtvet er det cirka 200 meter igjen. Følg skiltene til Filtvet
							brygge, og du finner oss nede i svingen, rett ved Filtvet fyr. Ta
							båten til Villa Malla i sommer! Ta kontakt med Ruter for
							ruteopplysninger: ruter.no eller ring 177.
						</p>
					</div>
					<div class="col">
						<img src={ruter} alt="rutetider" className="ruter-reisetider" />
					</div>
				</div>
			</div>
		</div>
	);
}
