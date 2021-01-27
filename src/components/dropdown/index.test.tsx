import { render } from "@testing-library/react";
import React from "react";
import Dropdown from ".";

const items = [
	{ name: "a", value: "A" },
	{ name: "b", value: "B" },
	{ name: "c", value: "C" },
];

describe("<Dropdown />", () => {
	it("should render all the options", () => {
		const component = render(
			<Dropdown
				items={items}
				onSelectItem={() => { }}
			/>
		);

		items.forEach(item => {
			expect(component.getByText(item.name)).toBeInTheDocument();;
		})
	});

	it("should select the selected item", () => {
		const selectedItem = items[1];
		const component = render(
			<Dropdown
				items={items}
				selectedItem={selectedItem}
				onSelectItem={() => { }}
			/>
		);

		items.forEach(item => {
			expect(component.queryAllByText(selectedItem.name)).toHaveLength(2);
		})
	});
});
