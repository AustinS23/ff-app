import React, { ComponentType } from "react";
import { NavLink, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Animals from "./pages/animals";
import Food from "./pages/food";
import Music from "./pages/music";
import Overview from "./pages/overview";
import Settings from "./pages/settings";
import logo from './images/ff_logo.png';

type RouteItem = {
	name: string;
	to: string;
	component?: ComponentType;
	isMainItem?: boolean;
}

const App = () => {
	const routes: RouteItem[] = [
		{ name: "Overview", to: "/overview", component: Overview, isMainItem: true },
		{ name: "Animals", to: "/animals", component: Animals, isMainItem: true },
		{ name: "Food", to: "/food", component: Food, isMainItem: true },
		{ name: "Music", to: "/music", component: Music, isMainItem: true },
		{ name: "Settings", to: "/settings", component: Settings },
		{ name: "Logout", to: "/logout" },
	];

	return (
		<Router>
			<div className="d-flex flex-row min-vh-100">
				<nav className="w-200 side-bar d-flex flex-column">
					<h5 className="text-white font-weight-bold header">
						<img className="logo" src={logo} alt="logo for DataDashboard" />
						DataDashboard
					</h5>
					<ul className="nav d-flex flex-column flex-grow-1">
						{routes.filter(r => r.isMainItem).map(({ name, to }) => (
							<li key={name} className="nav-item item">
								<NavLink to={to} activeClassName="active">{name}</NavLink>
							</li>
						))}
					</ul>
					<div className="divider" />
					<ul className="nav d-flex flex-column">
						{routes.filter(r => !r.isMainItem).map(({ name, to }) => (
							<li key={name} className="nav-item item">
								<NavLink to={to} activeClassName="active">{name}</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex-grow-1">
					<Switch>
						{routes.map(({ name, to, component: Page }) => {
							if (!Page) return;
							return <Route key={name} path={to} strict>
								<Page />
							</Route>
						})}
						<Route exact path="/">
							<Redirect to="/overview" />
						</Route>
					</Switch>
				</div>
			</div>
		</Router >
	);
}

export default App;
