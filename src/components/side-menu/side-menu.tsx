import clsx from "clsx";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";
import { RouteItem } from "../../routes";
import './index.css';
import logo from '../../images/ff_logo.png';

export type SideMenuProps = {
    routes: RouteItem[];
}

const SideMenu = ({ routes }: SideMenuProps) => {
    const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => {
        setIsOpenOnMobile(false);
    });

    return <>
        <div className="menu-mobile">
            <button type="button" className="btn d-flex align-items-center menu-button" onClick={() => setIsOpenOnMobile(true)}>
                <i className="material-icons md-36">dehaze</i>
            </button>
        </div>
        <nav
            className={clsx("w-200 side-menu d-flex flex-column", isOpenOnMobile && "open-mobile")}
            onClick={() => setIsOpenOnMobile(false)}
            ref={ref}>
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
    </>
}

export default SideMenu;