import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Menu from "./Menu";

describe("Menu", () => {
	it("Should display the information we expect", () => {
		const allArticles = {
			local: [{}],
			technology: [{}]
		};

		const { debug, getByText } = render(<Menu topics={allArticles} />);
		expect(getByText("Local")).toBeInTheDocument();
		expect(getByText("Technology")).toBeInTheDocument();
	});
});
