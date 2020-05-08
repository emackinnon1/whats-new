import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("Filters articles by search terms", () => {
		const mockSearchArticles = jest.fn();
		const mockClearSearch = jest.fn();
		const { debug, getByPlaceholderText } = render(
			<App searchArticles={mockSearchArticles} clearSearch={mockClearSearch} />
		);

		const search = getByPlaceholderText("Search article headlines");

		fireEvent.change(search, {
			target: { value: "the who" }
		});
		// debug();
	});
});
