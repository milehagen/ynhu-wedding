import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Program } from "./Components/Program";
import { Seating } from "./Components/Seating";

export default function App() {
	return (
		<Router>
			<div class="container-fluid">
				<div className="App">
					<Navbar />
					<div className="all-content">
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
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}
