import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import { Program } from "./Components/Program";
import { Seating } from "./Components/Seating";
import { Directions } from "./Components/Directions";

export default function App() {
	return (
		<div class="container-fluid">
			<Router>
				<div class="container-xxl">
					<div className="App">
						<Navbar />
						<Switch>
							<Route path="/home">
								<Home />
							</Route>
							<Route path="/program">
								<Program />
							</Route>
							<Route path="/seating">
								<Seating />
							</Route>
							<Route path="/directions">
								<Directions />
							</Route>
							<Redirect from="*" to="/home" />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}
