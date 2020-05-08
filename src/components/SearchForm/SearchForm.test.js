import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchForm from "./SearchForm";
describe("SearchForm", () => {
	it("When search term is entered, it should filter articles by search term", () => {
		const { debug, getByText, getByPlaceholderText } = render(<SearchForm />);

		expect(
			getByPlaceholderText("Search article headlines")
		).toBeInTheDocument();
	});
});
