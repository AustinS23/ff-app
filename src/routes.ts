import { ComponentType } from "react";
import Animals from "./pages/animals";
import Food from "./pages/food";
import Music from "./pages/music";
import Overview from "./pages/overview";
import Settings from "./pages/settings";

export type RouteItem = {
	name: string;
	to: string;
	component?: ComponentType;
	isMainItem?: boolean;
}

const routes: RouteItem[] = [
    { name: "Overview", to: "/overview", component: Overview, isMainItem: true },
    { name: "Animals", to: "/animals", component: Animals, isMainItem: true },
    { name: "Food", to: "/food", component: Food, isMainItem: true },
    { name: "Music", to: "/music", component: Music, isMainItem: true },
    { name: "Settings", to: "/settings", component: Settings },
    { name: "Logout", to: "/logout" },
];

export default routes;