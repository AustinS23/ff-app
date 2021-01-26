import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { SideMenu } from "./components/side-menu";
import UserDataAlert from "./components/user-data-alert";
import routes from "./routes";


const App = () => {


	return (
		<>
			<Router>
				<div className="d-flex flex-row min-vh-100">
					<SideMenu routes={routes} />

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
			</Router>
			<UserDataAlert />
		</>
	);
}

export default App;
