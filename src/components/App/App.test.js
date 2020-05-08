import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Filters articles by search terms", () => {
		const mockSearchArticles = jest.fn();
		const mockClearSearch = jest.fn();
		const { debug, getByPlaceholderText, getByText, queryByText } = render(
			<App searchArticles={mockSearchArticles} clearSearch={mockClearSearch} />
		);

		// input search term
		fireEvent.change(getByPlaceholderText("Search article headlines"), {
			target: { value: "the who" }
		});

		// check to be sure only searched articles are displaying
		expect(
			getByText("The Who postpones", { exact: false })
		).toBeInTheDocument();
		expect(
			queryByText("Giant Chicken", { exact: false })
		).not.toBeInTheDocument();
	});
});
