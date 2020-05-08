import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NewsArticle from "./NewsArticle";

describe("NewsArticle", () => {
	it("Should display the information we expect", () => {
		const articleInfo = {
			headline: "The Who postpones Denver Concert at the Pepsi Center",
			img:
				"https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg",
			description:
				"Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.",
			url:
				"https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/",
		};
		const { getByText } = render(<NewsArticle {...articleInfo} />);


		expect(
			getByText("The Who postpones Denver Concert at the Pepsi Center")
		).toBeInTheDocument();
	});
});
