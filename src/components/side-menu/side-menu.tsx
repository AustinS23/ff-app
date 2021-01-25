import React from "react";
import { NavLink } from "react-router-dom";
import { RouteItem } from "../../routes";
import './index.css';
import logo from '../../images/ff_logo.png';

export type SideMenuProps = {
	routes: RouteItem[];
}

const SideMenu = ({ routes }: SideMenuProps) => {
	return <nav className="w-200 side-menu d-flex flex-column">
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
}

export default SideMenu;