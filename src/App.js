import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Program } from "./Components/Program";

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
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}
