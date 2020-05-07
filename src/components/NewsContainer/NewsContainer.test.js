import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NewsContainer from "./NewsContainer";

describe("NewsContainer", () => {
	it("should display the information we expect", () => {
		const articles = [
			{
				id: 1,
				headline:
					"Man dies after getting infection linked to shellfish, North Carolina officials say",
				img:
					"https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS",
				description:
					"A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.",
				url:
					"https://www.bnd.com/news/nation-world/national/article235549897.html",
			},
			{
				id: 2,
				headline:
					"Azar, other health officials press people to get flu shots early",
				img:
					"https://thehill.com/sites/default/files/styles/thumb_small_article/public/flu_012918getty.jpg?itok=1dygJH3l",
				description:
					"U.S. health officials, including Health and Human Services Secretary Alex Azar, are encouraging Americans to get their flu shots early this year.",
				url:
					"https://thehill.com/homenews/news/463354-azar-other-public-health-officials-press-people-to-get-flu-shots-early",
			},
		];

		const { getAllByText, getByText } = render(
			<NewsContainer articles={articles} data-testid="news-container" />
		);

		const textSamples = getAllByText("North Carolina", { exact: false });

		expect(getByText("Azar, other", { exact: false })).toBeInTheDocument();
		expect(getByText("Man dies", { exact: false })).toBeInTheDocument();
		expect(textSamples[0]).toBeInTheDocument();
		expect(textSamples[1]).toBeInTheDocument();
	});
});
