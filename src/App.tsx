import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Animals from "./pages/animals";
import Food from "./pages/food";
import Music from "./pages/music";
import Overview from "./pages/overview";
import Settings from "./pages/settings";

const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Overview</Link>
						</li>
						<li>
							<Link to="/animals">Animals</Link>
						</li>
						<li>
							<Link to="/food">Foods</Link>
						</li>
						<li>
							<Link to="/music">Music</Link>
						</li>
						<li>
							<Link to="/settings">Settings</Link>
						</li>
						<li>
							<Link to="/logout">Logout</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/animals">
						<Animals />
					</Route>
					<Route path="/food">
						<Food />
					</Route>
					<Route path="/music">
						<Music />
					</Route>
					<Route path="/settings">
						<Settings />
					</Route>
					<Route path="/">
						<Overview />
					</Route>
				</Switch>
			</div>
		</Router >
	);
}

export default App;
